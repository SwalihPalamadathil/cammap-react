import { useLayoutEffect, useMemo, useRef, useState } from 'react';

/**
 * Computes exact Euclidean length of an SVG polyline string "x1,y1 x2,y2 ..."
 * Completely synchronous, deterministic, and safe against DOMException/non-rendered states.
 */
function computePolylineLength(pointsStr) {
  if (!pointsStr) return 0;
  const pairs = pointsStr.trim().split(/\s+/);
  let total = 0;
  let prevX = null;
  let prevY = null;
  for (let i = 0; i < pairs.length; i++) {
    const [xStr, yStr] = pairs[i].split(',');
    const x = parseFloat(xStr);
    const y = parseFloat(yStr);
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      if (prevX !== null && prevY !== null) {
        total += Math.hypot(x - prevX, y - prevY);
      }
      prevX = x;
      prevY = y;
    }
  }
  return total > 0 ? total : 2000;
}

function checkReducedMotion() {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/**
 * RouteLayer — animated walking-route polyline inside g#routeLayer.
 *
 * Phase 1 "drawing": one-time draw-in from start to destination.
 *   Uses exact Euclidean distance / getTotalLength() for real SVG user-unit length.
 *   strokeDashoffset animates totalLength → 0 via CSS class 'route-draw-in-live'.
 *   animationend (with safety timeout fallback) transitions to phase 2.
 *
 * Phase 2 "flowing": continuous dash-flow in the direction of travel.
 *   stroke-dasharray: 24 16 (user units), stroke-dashoffset: 40 → 0 looped.
 *
 * Reduced-motion: starts directly in 'flowing' phase where CSS @media rule overrides
 *   animation: none, stroke-dasharray: 24 16, stroke-dashoffset: 0, opacity: 1.
 *   The line is static and fully visible immediately.
 */
export function RouteLayer({ points }) {
  const polylineRef = useRef(null);

  const computedLength = useMemo(() => computePolylineLength(points), [points]);
  const [totalLength, setTotalLength] = useState(computedLength);

  // 'drawing' | 'flowing'
  const [phase, setPhase] = useState(() => {
    return checkReducedMotion() ? 'flowing' : 'drawing';
  });
  const [prevPoints, setPrevPoints] = useState(points);

  if (points !== prevPoints) {
    setPrevPoints(points);
    if (!checkReducedMotion()) {
      setPhase('drawing');
    }
  }

  useLayoutEffect(() => {
    if (!points || checkReducedMotion()) return;

    // Measure from SVG DOM if rendered and available; otherwise fallback safely to computedLength
    const el = polylineRef.current;
    if (el && typeof el.getTotalLength === 'function') {
      try {
        const l = el.getTotalLength();
        if (l > 0) setTotalLength(l);
      } catch {
        // Safe fallback to exact Euclidean length
      }
    }

    // Safety fallback: ensure transition to flowing even if animationend event doesn't fire
    const timer = setTimeout(() => {
      setPhase('flowing');
    }, 1100);

    return () => clearTimeout(timer);
  }, [points]);

  const handleAnimationEnd = () => {
    setPhase('flowing');
  };

  if (!points) return null;

  const isDrawing = phase === 'drawing';
  const effectiveLength = totalLength || computedLength;

  return (
    <polyline
      ref={polylineRef}
      points={points}
      fill="none"
      stroke="#2563EB"
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        ...(isDrawing
          ? {
              strokeDasharray: effectiveLength,
              strokeDashoffset: effectiveLength,
            }
          : {}),
        pointerEvents: 'none',
      }}
      className={isDrawing ? 'route-draw-in-live' : 'route route-flow'}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}

export default RouteLayer;
