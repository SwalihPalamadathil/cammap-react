import { useEffect, useRef, useCallback } from 'react';
import Panzoom from '@panzoom/panzoom';

export function usePanzoom(wrapperRef, frameRef) {
  const panzoomInstanceRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const frame = frameRef.current;
    if (!wrapper || !frame) return;

    // Helper: update touchAction on wrapper and frame
    const updateTouchAction = (scale) => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      const action = isFs || scale > 1.01 ? 'none' : 'pan-y';
      wrapper.style.touchAction = action;
      frame.style.touchAction = action;
      pz.setOptions({ touchAction: action });
    };

    const pz = Panzoom(wrapper, {
      maxScale: 5,
      minScale: 1,
      contain: 'outside',
      panOnlyWhenZoomed: true,
      touchAction: 'pan-y',
      handleStartEvent: (e) => {
        // Desktop mouse: preventDefault so drag works without text selection
        if (e.pointerType === 'mouse') {
          e.preventDefault();
          return;
        }
        // In fullscreen mode: map handles all touches
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          e.preventDefault();
          return;
        }
        // Multi-touch pinch: prevent browser page-zoom
        if (e.pointerType === 'touch' && !e.isPrimary) {
          e.preventDefault();
          return;
        }
        // Zoomed in: allow map panning
        if (pz.getScale() > 1.01) {
          e.preventDefault();
          return;
        }
        // Scale === 1, single touch: DO NOT preventDefault! Let page scroll vertically
      }
    });
    panzoomInstanceRef.current = pz;

    // Track touchmove on wrapper to handle pinch-zoom and edge-scroll handoff
    let lastTouchX = 0;
    let lastTouchY = 0;

    const onTouchStart = (e) => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      if (isFs) {
        e.preventDefault();
        return;
      }
      if (e.touches.length >= 2) {
        // Pinch zoom starts: prevent browser viewport zoom
        e.preventDefault();
        return;
      }
      const touch = e.touches[0];
      lastTouchX = touch.clientX;
      lastTouchY = touch.clientY;
      // When scale === 1, do NOT preventDefault to allow native vertical page scroll
    };

    const onTouchMove = (e) => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      if (isFs) {
        e.preventDefault();
        return;
      }

      if (e.touches.length >= 2) {
        // Pinch zoom active: prevent native browser page zoom
        e.preventDefault();
        return;
      }

      const scale = pz.getScale();
      if (scale <= 1.01) {
        // Scale is 1: normal native vertical scrolling happens via touch-action: pan-y
        return;
      }

      // Scale > 1: check pan boundary to prevent scroll trap
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastTouchX;
      const deltaY = touch.clientY - lastTouchY;
      lastTouchX = touch.clientX;
      lastTouchY = touch.clientY;

      const wrapperRect = wrapper.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();

      const atTopEdge = wrapperRect.top >= frameRect.top - 2;
      const atBottomEdge = wrapperRect.bottom <= frameRect.bottom + 2;

      const isDraggingDown = deltaY > 0;
      const isDraggingUp = deltaY < 0;
      const isVertical = Math.abs(deltaY) > Math.abs(deltaX);

      if (isVertical && ((isDraggingDown && atTopEdge) || (isDraggingUp && atBottomEdge))) {
        // Map is at its vertical pan limit in this drag direction: hand gesture to page
        window.scrollBy(0, -deltaY);
        return;
      }

      // Otherwise map is panning
      e.preventDefault();
    };

    const onTouchEnd = (e) => {
      if (e.touches.length === 0) {
        updateTouchAction(pz.getScale());
      }
    };

    // Scoped non-passive touch listeners on wrapper
    wrapper.addEventListener('touchstart', onTouchStart, { passive: false });
    wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
    wrapper.addEventListener('touchend', onTouchEnd, { passive: true });
    wrapper.addEventListener('touchcancel', onTouchEnd, { passive: true });

    // Update touch-action when panzoom zooms
    const onPanzoomChange = (e) => {
      if (e.detail) {
        updateTouchAction(e.detail.scale);
      }
    };
    wrapper.addEventListener('panzoomchange', onPanzoomChange);

    // Mouse wheel zoom on frame for desktop
    const onWheel = (e) => {
      pz.zoomWithWheel(e);
    };
    frame.addEventListener('wheel', onWheel, { passive: false });

    // Handle fullscreen changes
    const onFullscreenChange = () => {
      updateTouchAction(pz.getScale());
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);

    return () => {
      wrapper.removeEventListener('touchstart', onTouchStart);
      wrapper.removeEventListener('touchmove', onTouchMove);
      wrapper.removeEventListener('touchend', onTouchEnd);
      wrapper.removeEventListener('touchcancel', onTouchEnd);
      wrapper.removeEventListener('panzoomchange', onPanzoomChange);
      frame.removeEventListener('wheel', onWheel);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
      pz.destroy();
      panzoomInstanceRef.current = null;
    };
  }, [wrapperRef, frameRef]);

  const zoomIn = useCallback(() => {
    panzoomInstanceRef.current?.zoomIn();
  }, []);

  const zoomOut = useCallback(() => {
    panzoomInstanceRef.current?.zoomOut();
  }, []);

  const reset = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    panzoomInstanceRef.current?.reset();
    if (wrapperRef.current) {
      wrapperRef.current.style.touchAction = 'pan-y';
    }
    if (frameRef.current) {
      frameRef.current.style.touchAction = 'pan-y';
    }
    panzoomInstanceRef.current?.setOptions({ touchAction: 'pan-y' });
  }, [wrapperRef, frameRef]);

  return {
    zoomIn,
    zoomOut,
    reset
  };
}
