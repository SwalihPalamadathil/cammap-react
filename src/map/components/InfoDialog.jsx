import { useEffect, useRef } from 'react';

export function InfoDialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="native-dialog info-dialog"
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-labelledby="infoModalTitle"
    >
      <div className="native-dialog-content">
        <div className="native-dialog-header">
          <h3 id="infoModalTitle" className="dialog-title">
            <i className="bi bi-info-circle-fill text-primary me-2" aria-hidden="true"></i>
            About CamMap EMEA
          </h3>
          <button
            type="button"
            className="dialog-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="native-dialog-body">
          <p className="dialog-lead-text">
            CamMap is an intelligent campus navigation web application created specifically for students, parents, teachers, and visitors of EMEA College.
          </p>

          <div className="algo-info-card">
            <strong className="algo-info-title">
              <i className="bi bi-cpu-fill me-1" aria-hidden="true"></i> Routing Algorithm:
            </strong>
            <p className="algo-info-desc">
              Uses Graph Theory &amp; Breadth-First Search (BFS) to compute the exact shortest walking path between any two campus landmarks.
            </p>
          </div>

          <ul className="info-feature-list">
            <li>
              <i className="bi bi-check2-circle text-success me-2" aria-hidden="true"></i>
              <span>Instant campus pathfinding</span>
            </li>
            <li>
              <i className="bi bi-check2-circle text-success me-2" aria-hidden="true"></i>
              <span>Panzoom interactive vector canvas</span>
            </li>
            <li>
              <i className="bi bi-check2-circle text-success me-2" aria-hidden="true"></i>
              <span>Detailed department &amp; floor directory</span>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
  );
}
