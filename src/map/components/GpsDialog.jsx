import { useEffect, useRef } from 'react';

export function GpsDialog({ isOpen, onClose }) {
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
      className="native-dialog gps-dialog"
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-labelledby="gpsModalTitle"
    >
      <div className="native-dialog-content">
        <div className="native-dialog-header">
          <h3 id="gpsModalTitle" className="dialog-title">
            <i className="bi bi-crosshair text-primary me-2" aria-hidden="true"></i>
            Campus GPS Position
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

        <div className="native-dialog-body text-center">
          <div className="empty-icon-circle mb-3 mx-auto" aria-hidden="true">
            <svg
              className="empty-state-svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <circle cx="30" cy="30" r="26" stroke="#DBEAFE" strokeWidth="1.5" />
              <circle cx="30" cy="30" r="18" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx="30" cy="30" r="6" fill="#2563EB" />
              <circle cx="30" cy="30" r="10" stroke="#2563EB" strokeWidth="1.5" />
              <line x1="30" y1="6" x2="30" y2="14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="46" x2="30" y2="54" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="6" y1="30" x2="14" y2="30" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="46" y1="30" x2="54" y2="30" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h4 className="fw-bold text-slate-900 mb-2">GPS Live Navigation Coming Soon</h4>
          <p className="text-slate-600 fs-7 mb-4">
            Live location-based navigation will be available in a future update.
          </p>
          <button
            type="button"
            className="btn-dialog-primary"
            onClick={onClose}
          >
            Got It
          </button>
        </div>
      </div>
    </dialog>
  );
}
