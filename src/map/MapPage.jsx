import { useState, useRef, useCallback } from 'react';
import { useRoute } from './hooks/useRoute';
import { usePanzoom } from './hooks/usePanzoom';
import { MapHeader } from './components/MapHeader';
import { RouteBar } from './components/RouteBar';
import { MapStage } from './components/MapStage';
import { MapPlateKey } from './components/MapPlateKey';
import { BuildingDetails } from './components/BuildingDetails';
import { GpsDialog } from './components/GpsDialog';
import { InfoDialog } from './components/InfoDialog';
import { MapFooter } from './components/MapFooter';

export function MapPage() {
  const routeState = useRoute();
  const [userSelectedBuilding, setUserSelectedBuilding] = useState(null);
  const [isGpsOpen, setIsGpsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Active building: user selection overrides destination building
  const selectedBuilding =
    userSelectedBuilding !== null
      ? userSelectedBuilding
      : (routeState.status === 'route-active' || routeState.status === 'same-building') && (routeState.buildingName || routeState.destinationInfo?.building)
        ? (routeState.buildingName || routeState.destinationInfo?.building)
        : null;

  const wrapperRef = useRef(null);
  const frameRef = useRef(null);

  const {
    zoomIn,
    zoomOut,
    reset
  } = usePanzoom(wrapperRef, frameRef);

  const handleSelectBuilding = useCallback((locationName) => {
    setUserSelectedBuilding(locationName);
  }, []);

  const handleResetRoute = useCallback(() => {
    routeState.resetRoute();
    setUserSelectedBuilding('');
    reset();
  }, [routeState, reset]);

  return (
    <div className="map-page-shell">
      {/* MAP HEADER */}
      <MapHeader />

      {/* MAIN CONTENT WORKSPACE */}
      <main className="main-content">
        <div className="container-fluid map-page-container">
          {/* SECTION 1: ROUTE BAR (Itinerary Rail / Empty States) */}
          <RouteBar
            status={routeState.status}
            from={routeState.from}
            to={routeState.to}
            buildingName={routeState.buildingName}
            junctionCount={routeState.junctionCount}
            timeStr={routeState.timeStr}
            onResetRoute={handleResetRoute}
            onOpenGps={() => setIsGpsOpen(true)}
            onOpenInfo={() => setIsInfoOpen(true)}
          />

          {/* SECTION 2: MAP PLATE (Canvas Hero) */}
          <MapStage
            wrapperRef={wrapperRef}
            frameRef={frameRef}
            routeState={routeState}
            selectedBuilding={selectedBuilding}
            onSelectBuilding={handleSelectBuilding}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            reset={reset}
          />

          {/* SECTION 3: BOTTOM ROW (Map Plate Key + Building Details) */}
          <section className="bottom-workspace-grid my-4" aria-label="Map plate key and building details">
            <MapPlateKey />
            <BuildingDetails selectedBuilding={selectedBuilding} />
          </section>

          {/* Hidden contract live region for compatibility */}
          <div
            aria-hidden="true"
            style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}
          >
            <span id="fromResult">{routeState.from}</span>
            <span id="toResult">{routeState.to}</span>
            <span id="junctionResult">{routeState.junctionCount}</span>
            <span id="timeResult">{routeState.timeStr}</span>
            <span id="statusResult">{routeState.status}</span>
          </div>
        </div>
      </main>

      {/* DIALOGS */}
      <GpsDialog isOpen={isGpsOpen} onClose={() => setIsGpsOpen(false)} />
      <InfoDialog isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* MAP FOOTER */}
      <MapFooter />
    </div>
  );
}

export default MapPage;
