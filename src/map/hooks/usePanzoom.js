import { useEffect, useRef, useCallback } from 'react';
import Panzoom from '@panzoom/panzoom';

export function usePanzoom(wrapperRef, frameRef) {
  const panzoomInstanceRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const frame = frameRef.current;
    if (!wrapper || !frame) return;

    const pz = Panzoom(wrapper, {
      maxScale: 5,
      minScale: 1,
      contain: 'outside'
    });
    panzoomInstanceRef.current = pz;

    return () => {
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
    panzoomInstanceRef.current?.reset();
  }, []);

  return {
    zoomIn,
    zoomOut,
    reset
  };
}
