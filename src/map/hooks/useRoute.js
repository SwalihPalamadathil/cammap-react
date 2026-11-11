import { useState, useCallback, useEffect } from 'react';
import {
  locationJunction,
  destinations,
  findShortestPath,
  formatWalkTime,
  buildRoutePoints,
  buildRouteCoords
} from '../engine/routeEngine';

export function getBuildingForLocation(loc) {
  if (!loc) return null;
  const dest = destinations[loc];
  if (dest && dest.building) {
    if (dest.building === 'Commerce Block') return 'Commerce Department';
    if (dest.building === 'BBA Department') return 'Business Administration Department';
    return dest.building;
  }
  if (loc === 'Library Building') return 'Library';
  if (destinations[loc]) return loc;
  return null;
}

function computeCurrentRoute() {
  let from = '';
  let to = '';
  try {
    from = localStorage.getItem('from') || '';
    to = localStorage.getItem('to') || '';
  } catch {
    // localStorage may fail in private mode
  }

  if (!from || !to) {
    return {
      status: 'no-route',
      from: '',
      to: '',
      route: [],
      junctionCount: 0,
      timeStr: '--',
      points: '',
      coords: [],
      buildingName: '',
      destinationInfo: null
    };
  }

  if (from === to) {
    return {
      status: 'same-location',
      from,
      to,
      route: [],
      junctionCount: 0,
      timeStr: '0 min (You are here)',
      points: '',
      coords: [],
      buildingName: getBuildingForLocation(from) || '',
      destinationInfo: destinations[to] || null
    };
  }

  // Same-building detection
  const buildingFrom = getBuildingForLocation(from);
  const buildingTo = getBuildingForLocation(to);

  if (buildingFrom && buildingTo && buildingFrom === buildingTo) {
    return {
      status: 'same-building',
      from,
      to,
      buildingName: buildingFrom,
      route: [],
      junctionCount: 0,
      timeStr: '',
      points: '',
      coords: [],
      destinationInfo: destinations[to] || destinations[from] || null
    };
  }

  const startNode = locationJunction[from];
  const endNode = locationJunction[to];

  if (!startNode || !endNode) {
    return {
      status: 'no-route',
      from,
      to,
      route: [],
      junctionCount: 0,
      timeStr: '--',
      points: '',
      coords: [],
      buildingName: '',
      destinationInfo: null
    };
  }

  const shortestRoute = findShortestPath(startNode, endNode);
  if (!shortestRoute || shortestRoute.length === 0) {
    return {
      status: 'no-route',
      from,
      to,
      route: [],
      junctionCount: 0,
      timeStr: '--',
      points: '',
      coords: [],
      buildingName: '',
      destinationInfo: null
    };
  }

  const timeStr = formatWalkTime(shortestRoute.length);
  const points = buildRoutePoints(shortestRoute);
  const coords = buildRouteCoords(shortestRoute);

  return {
    status: 'route-active',
    from,
    to,
    buildingName: buildingTo || '',
    route: shortestRoute,
    junctionCount: shortestRoute.length,
    timeStr,
    points,
    coords,
    destinationInfo: destinations[to] || null
  };
}

export function useRoute() {
  const [routeState, setRouteState] = useState(computeCurrentRoute);

  const evaluateRoute = useCallback(() => {
    setRouteState(computeCurrentRoute());
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      setRouteState(computeCurrentRoute());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Reset route: clears active UI only without clearing localStorage (contract parity)
  const resetRoute = useCallback(() => {
    setRouteState({
      status: 'no-route',
      from: '',
      to: '',
      route: [],
      junctionCount: 0,
      timeStr: '--',
      points: '',
      coords: [],
      buildingName: '',
      destinationInfo: null
    });
  }, []);

  return {
    ...routeState,
    resetRoute,
    refreshRoute: evaluateRoute
  };
}
