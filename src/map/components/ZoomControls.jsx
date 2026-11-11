

import { useState, useEffect } from 'react';

export function ZoomControls({ onZoomIn, onZoomOut, onRecenter }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const card = document.getElementById('mapCard');
    if (!card) return;
    if (!document.fullscreenElement) {
      if (card.requestFullscreen) {
        card.requestFullscreen().catch(() => {});
      } else if (card.webkitRequestFullscreen) {
        card.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  return (
    <div className="floating-controls-stack" role="toolbar" aria-label="Map zoom controls">
      <button
        id="zoomIn"
        type="button"
        className="btn-floating-control"
        onClick={onZoomIn}
        title="Zoom In"
        aria-label="Zoom In"
      >
        <i className="bi bi-plus-lg" aria-hidden="true"></i>
      </button>

      <button
        id="zoomOut"
        type="button"
        className="btn-floating-control"
        onClick={onZoomOut}
        title="Zoom Out"
        aria-label="Zoom Out"
      >
        <i className="bi bi-dash-lg" aria-hidden="true"></i>
      </button>

      <button
        id="recenterBtn"
        type="button"
        className="btn-floating-control"
        onClick={onRecenter}
        title="Center View"
        aria-label="Center View"
      >
        <i className="bi bi-arrows-angle-contract" aria-hidden="true"></i>
      </button>

      <button
        id="fullscreenBtn"
        type="button"
        className="btn-floating-control"
        onClick={toggleFullscreen}
        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Map"}
        aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen Map"}
      >
        <i className={`bi ${isFullscreen ? "bi-fullscreen-exit" : "bi-arrows-fullscreen"}`} aria-hidden="true"></i>
      </button>
    </div>
  );
}
