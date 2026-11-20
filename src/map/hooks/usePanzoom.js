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
      } else {
        // One finger: DO NOT preventDefault — page scrolls natively.
        _twoFingerActive = false;
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
        // touch-action:pan-y lets the browser scroll the page at any zoom level.
        return;
      }

      // TWO FINGERS: pinch-zoom + two-finger pan via rAF.
      e.preventDefault();
      _twoFingerActive = true;

      const t0 = e.touches[0], t1 = e.touches[1];
      const curMidX = (t0.clientX + t1.clientX) / 2;
      const curMidY = (t0.clientY + t1.clientY) / 2;
      const curDist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);

      // Pinch: zoom around the midpoint
      if (_lastDist > 0) {
        const newScale = Math.min(5, Math.max(1, pz.getScale() * (curDist / _lastDist)));
        pz.zoomToPoint(newScale, { clientX: curMidX, clientY: curMidY });
      }

      // Two-finger pan: translate by midpoint delta when zoomed in
      if (pz.getScale() > 1.01 && _lastDist > 0) {
        const { x, y } = pz.getPan();
        const dX = curMidX - _lastMidX;
        const dY = curMidY - _lastMidY;
        if (Math.abs(dX) > 0.5 || Math.abs(dY) > 0.5) {
          pz.pan(x + dX, y + dY);
        }
      }

      _lastMidX = curMidX;
      _lastMidY = curMidY;
      _lastDist = curDist;
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2 && _twoFingerActive) {
        _twoFingerActive = false;
        _lastDist = 0;
        _gestureEndTime = Date.now();
        setTimeout(() => { _gestureActive = false; }, 400);
      }
    };

    // Scoped non-passive ONLY for the two listeners that call preventDefault
    wrapper.addEventListener('touchstart',  onTouchStart, { passive: false });
    wrapper.addEventListener('touchmove',   onTouchMove,  { passive: false });
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
    const onWheel = (e) => { pz.zoomWithWheel(e); };
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
