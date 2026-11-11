

export function ZoomControls({ onZoomIn, onZoomOut, onRecenter }) {
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
    </div>
  );
}
