import { useEffect, useRef, useCallback } from 'react';
import Panzoom from '@panzoom/panzoom';

// ─── GESTURE RULES ────────────────────────────────────────────────────────────
// touch-action is ALWAYS 'pan-y' at any zoom level.  The browser handles
// one-finger page scroll natively; JS never calls preventDefault for 1-touch.
// Two-finger touch: preventDefault to block browser page-zoom, then we drive
// pinch-zoom + midpoint pan ourselves.
// Fullscreen: body scroll is locked → touch-action switches to 'none' so
// one-finger pan works inside the full-screen map.
// Desktop: unchanged (mouse-wheel zoom, mouse-drag pan).

export function usePanzoom(wrapperRef, frameRef) {
  const panzoomInstanceRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const frame   = frameRef.current;
    if (!wrapper || !frame) return;

    const isFs = () => !!(document.fullscreenElement || document.webkitFullscreenElement);

    const setTouchAction = (action) => {
      wrapper.style.touchAction = action;
      frame.style.touchAction   = action;
      pz.setOptions({ touchAction: action });
    };

    const pz = Panzoom(wrapper, {
      maxScale: 5,
      minScale: 1,
      contain: 'outside',
      panOnlyWhenZoomed: true,
      // Always pan-y — browser scrolls page on 1-finger at any zoom level.
      touchAction: 'pan-y',
      handleStartEvent: (e) => {
        // Desktop drag-pan: prevent text-selection, no effect on touch.
        if (e.pointerType === 'mouse') { e.preventDefault(); return; }
        // Fullscreen: body scroll locked → one-finger pan is intentional.
        if (isFs()) { e.preventDefault(); return; }
        // Touch (single or multi): DO NOT preventDefault here.
        // Two-finger pinch is handled by our touchstart/touchmove listeners below.
      }
    });
    panzoomInstanceRef.current = pz;

    // ── Ghost-click guard ───────────────────────────────────────────────────
    let _gestureEndTime = 0;
    let _gestureActive  = false;
    const onClickCapture = (e) => {
      if (_gestureActive || (Date.now() - _gestureEndTime < 350)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    wrapper.addEventListener('click', onClickCapture, true);

    // ── Pinch / two-finger pan ───────────────────────────────────────────────
    let _lastMidX = 0, _lastMidY = 0;
    let _lastDist = 0;
    let _twoFingerActive = false;
    let _rafId = null;
    let _pendingPinch = null;

    const schedulePinchUpdate = (newScale, midX, midY, dX, dY) => {
      _pendingPinch = { newScale, midX, midY, dX, dY };
      if (_rafId === null) {
        _rafId = requestAnimationFrame(() => {
          if (_pendingPinch) {
            const p = _pendingPinch;
            _pendingPinch = null;
            if (p.newScale !== null) {
              pz.zoomToPoint(p.newScale, { clientX: p.midX, clientY: p.midY });
            }
            if (p.dX !== 0 || p.dY !== 0) {
              const { x, y } = pz.getPan();
              pz.pan(x + p.dX, y + p.dY);
            }
          }
          _rafId = null;
        });
      }
    };

    const onTouchMove = (e) => {
      if (isFs()) {
        // Body scroll is locked in fullscreen; let Panzoom handle one-finger pan.
        e.preventDefault();
        return;
      }
      if (e.touches.length < 2) {
        // ONE FINGER: never preventDefault.
        return;
      }

      // TWO FINGERS: pinch-zoom + two-finger pan batched via rAF.
      e.preventDefault();
      _twoFingerActive = true;

      const t0 = e.touches[0], t1 = e.touches[1];
      const curMidX = (t0.clientX + t1.clientX) / 2;
      const curMidY = (t0.clientY + t1.clientY) / 2;
      const curDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);

      let newScale = null;
      if (_lastDist > 0) {
        newScale = Math.min(5, Math.max(1, pz.getScale() * (curDist / _lastDist)));
      }

      let dX = 0, dY = 0;
      if (pz.getScale() > 1.01 && _lastDist > 0) {
        const diffX = curMidX - _lastMidX;
        const diffY = curMidY - _lastMidY;
        if (Math.abs(diffX) > 0.5 || Math.abs(diffY) > 0.5) {
          dX = diffX;
          dY = diffY;
        }
      }

      schedulePinchUpdate(newScale, curMidX, curMidY, dX, dY);

      _lastMidX = curMidX;
      _lastMidY = curMidY;
      _lastDist = curDist;
    };

    const onTouchStart = (e) => {
      if (isFs()) return; // fullscreen: Panzoom handles all gestures
      if (e.touches.length >= 2) {
        e.preventDefault(); // block browser page-zoom on this element
        _twoFingerActive = true;
        _gestureActive   = true;
        const t0 = e.touches[0], t1 = e.touches[1];
        _lastMidX = (t0.clientX + t1.clientX) / 2;
        _lastMidY = (t0.clientY + t1.clientY) / 2;
        _lastDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
        // Dynamically attach non-passive touchmove listener ONLY when 2 fingers touch down
        wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
      } else {
        // One finger: page scrolls natively with 100% passive momentum!
        _twoFingerActive = false;
        wrapper.removeEventListener('touchmove', onTouchMove);
      }
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2) {
        wrapper.removeEventListener('touchmove', onTouchMove);
        if (_twoFingerActive) {
          _twoFingerActive = false;
          _lastDist = 0;
          _gestureEndTime = Date.now();
          if (_rafId !== null) {
            cancelAnimationFrame(_rafId);
            _rafId = null;
          }
          _pendingPinch = null;
          setTimeout(() => { _gestureActive = false; }, 350);
        }
      }
    };

    wrapper.addEventListener('touchstart',  onTouchStart, { passive: false });
    wrapper.addEventListener('touchend',    onTouchEnd,   { passive: true  });
    wrapper.addEventListener('touchcancel', onTouchEnd,   { passive: true  });

    // ── Safari/iOS: prevent native pinch-to-page-zoom on the map ────────────
    const onGesture = (e) => e.preventDefault();
    wrapper.addEventListener('gesturestart',  onGesture, { passive: false });
    wrapper.addEventListener('gesturechange', onGesture, { passive: false });

    // ── Fullscreen body-scroll lock ─────────────────────────────────────────
    const onFullscreenChange = () => {
      if (isFs()) {
        document.body.style.overflow = 'hidden';
        setTouchAction('none');
      } else {
        document.body.style.overflow = '';
        setTouchAction('pan-y');
      }
    };
    document.addEventListener('fullscreenchange',       onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);

    // ── Desktop mouse-wheel zoom ────────────────────────────────────────────
    // Normal mouse-wheel scrolling over the map must scroll the webpage.
    // The map must NOT zoom when using the normal mouse wheel.
    // Ctrl + mouse wheel (or Cmd + mouse wheel on macOS) zooms the map.
    // Fullscreen mode also allows wheel zoom since there is no page to scroll.
    const onWheel = (e) => {
      if (e.ctrlKey || e.metaKey || isFs()) {
        e.preventDefault();
        pz.zoomWithWheel(e);
      }
      // When not holding Ctrl/Cmd, do not call preventDefault() or zoomWithWheel();
      // the event bubbles and the webpage scrolls normally!
    };
    frame.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      wrapper.removeEventListener('click',         onClickCapture, true);
      wrapper.removeEventListener('touchstart',    onTouchStart);
      wrapper.removeEventListener('touchmove',     onTouchMove);
      wrapper.removeEventListener('touchend',      onTouchEnd);
      wrapper.removeEventListener('touchcancel',   onTouchEnd);
      wrapper.removeEventListener('gesturestart',  onGesture);
      wrapper.removeEventListener('gesturechange', onGesture);
      frame.removeEventListener('wheel',           onWheel);
      document.removeEventListener('fullscreenchange',       onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      document.body.style.overflow = '';
      pz.destroy();
      panzoomInstanceRef.current = null;
    };
  }, [wrapperRef, frameRef]);

  const zoomIn  = useCallback(() => { panzoomInstanceRef.current?.zoomIn();  }, []);
  const zoomOut = useCallback(() => { panzoomInstanceRef.current?.zoomOut(); }, []);

  const reset = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    panzoomInstanceRef.current?.reset();
    // Always restore pan-y; fullscreenchange handler will set 'none' if needed.
    if (wrapperRef.current) wrapperRef.current.style.touchAction = 'pan-y';
    if (frameRef.current)   frameRef.current.style.touchAction   = 'pan-y';
    panzoomInstanceRef.current?.setOptions({ touchAction: 'pan-y' });
    document.body.style.overflow = '';
  }, [wrapperRef, frameRef]);

  return { zoomIn, zoomOut, reset };
}
