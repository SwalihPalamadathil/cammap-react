import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import campusMapSvgRaw from '../assets/campus-map.inline.svg?raw';
import { svgBuildingMap, standaloneSvgBuildings } from '../data/buildingInfo';
import { RouteLayer } from './RouteLayer';
import { ZoomControls } from './ZoomControls';

export function MapStage({
  wrapperRef,
  frameRef,
  routeState,
  selectedBuilding,
  onSelectBuilding,
  zoomIn,
  zoomOut,
  reset
}) {
  const [routeLayerEl, setRouteLayerEl] = useState(null);
  const selectedElRef = useRef(null);

  // Initialize SVG buildings and routeLayer portal container
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (!wrapper.querySelector('#campusMap')) {
      wrapper.innerHTML = campusMapSvgRaw;
    }

    const svgEl = wrapper.querySelector('#campusMap');
    if (!svgEl) return;

    // Locate or create routeLayer
    let rl = svgEl.querySelector('#routeLayer');
    if (!rl) {
      rl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      rl.setAttribute('id', 'routeLayer');
      svgEl.appendChild(rl);
    }
    setRouteLayerEl(rl);

    // Tag filter-group buildings verbatim
    svgBuildingMap.forEach(item => {
      const group = svgEl.querySelector(`g[filter*="${item.filterId}"]`);
      if (group) {
        group.classList.add('svg-building');
        group.setAttribute('data-location', item.name);
        group.setAttribute('id', item.id);
        group.setAttribute('tabindex', '0');
        group.setAttribute('role', 'button');
        group.setAttribute('aria-label', item.name);
      }
    });

    // Tag standalone SVG buildings verbatim
    standaloneSvgBuildings.forEach(item => {
      const elements = svgEl.querySelectorAll(item.selector);
      elements.forEach(el => {
        el.classList.add('svg-building');
        el.setAttribute('data-location', item.name);
        el.setAttribute('id', item.id);
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'button');
        el.setAttribute('aria-label', item.name);
      });
    });

    // Delegate click events on SVG
    const handleClick = (e) => {
      const buildingGroup = e.target.closest('.svg-building');
      if (!buildingGroup) return;
      const locationName = buildingGroup.getAttribute('data-location');
      if (locationName) {
        onSelectBuilding(locationName, buildingGroup);
      }
    };

    // Delegate keydown (Enter / Space) events on SVG
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const buildingGroup = e.target.closest('.svg-building');
        if (!buildingGroup) return;
        e.preventDefault();
        const locationName = buildingGroup.getAttribute('data-location');
        if (locationName) {
          onSelectBuilding(locationName, buildingGroup);
        }
      }
    };

    svgEl.addEventListener('click', handleClick);
    svgEl.addEventListener('keydown', handleKeyDown);

    return () => {
      svgEl.removeEventListener('click', handleClick);
      svgEl.removeEventListener('keydown', handleKeyDown);
    };
  }, [wrapperRef, onSelectBuilding]);

  // Synchronize .svg-building-selected CSS class
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const svgEl = wrapper.querySelector('#campusMap');
    if (!svgEl) return;

    // Clear previous selection class
    svgEl.querySelectorAll('.svg-building-selected').forEach(el => {
      el.classList.remove('svg-building-selected');
    });

    if (selectedBuilding) {
      // Find element by data-location
      const match = svgEl.querySelector(`[data-location="${selectedBuilding}"]`);
      if (match) {
        match.classList.add('svg-building-selected');
        selectedElRef.current = match;
      }
    }
  }, [selectedBuilding, wrapperRef]);

  return (
    <section className="map-section my-4" aria-label="Interactive Campus Vector Map">
      <div className="map-card-wrapper">
        {/* Structural Depth Underlay */}
        <div className="hero-stage-underlay" aria-hidden="true"></div>

        <div className="map-card" id="mapCard">
          {/* Ruler Ticks along Top and Left Edges (outside viewport) */}
          <div className="stage-ruler-top" aria-hidden="true"></div>
          <div className="stage-ruler-left" aria-hidden="true"></div>

          {/* Corner Crop Marks (outside viewport) */}
          <span className="crop-tick tick-tl" aria-hidden="true"></span>
          <span className="crop-tick tick-tr" aria-hidden="true"></span>
          <span className="crop-tick tick-bl" aria-hidden="true"></span>
          <span className="crop-tick tick-br" aria-hidden="true"></span>

          {/* MAP HEADER CONTROL BAR */}
          <div className="map-card-header">
            <div className="map-card-title-group">
              <span className="status-dot ok-dot" aria-hidden="true"></span>
              <span className="map-card-title">EMEA College Campus Vector Map</span>
              <span className="map-scale-tag">1:1000 VECTOR</span>
            </div>

            <div className="map-legend d-none d-md-flex align-items-center gap-3">
              <span className="legend-item">
                <span className="legend-dot bg-route"></span> Route Path
              </span>
              <span className="legend-item">
                <span className="legend-dot bg-block"></span> Selected Block
              </span>
              <span className="legend-item">
                <span className="legend-dot bg-building"></span> Buildings
              </span>
              <span className="legend-item">
                <span className="legend-dot bg-road"></span> Walking Roads
              </span>
            </div>
          </div>

          {/* SCALE-BAR RULE DECORATION */}
          <div className="scale-bar-rule" aria-hidden="true"></div>

          {/* INTERACTIVE MAP CANVAS VIEWPORT */}
          <div className="map-viewport" ref={frameRef}>
            <div
              id="mapWrapper"
              ref={wrapperRef}
              className="map-panzoom-target"
            />

            {/* Portal the Animated Cartographic Route into <g id="routeLayer"> */}
            {routeLayerEl && routeState.status === 'route-active' &&
              createPortal(
                <RouteLayer points={routeState.points} />,
                routeLayerEl
              )}

            {/* Floating Zoom Controls Stack */}
            <ZoomControls
              onZoomIn={zoomIn}
              onZoomOut={zoomOut}
              onRecenter={reset}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
