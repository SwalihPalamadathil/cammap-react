
import "./Maintenance.css";

export default function Maintenance() {
    return (
        <main className="maintenance-page">
            <div className="maintenance-card">

                <div className="maintenance-logo">
                    <span>CM</span>
                </div>

                <div className="maintenance-status">
                    <span className="status-dot"></span>
                    TEMPORARILY UNAVAILABLE
                </div>

                <div className="maintenance-icon">
                    <svg viewBox="0 0 120 120" fill="none">
                        <path
                            d="M38 28L28 38L82 92L92 82L38 28Z"
                            stroke="currentColor"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M76 24L96 44M86 14L106 34M18 76L44 102"
                            stroke="currentColor"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />
                        <circle cx="60" cy="60" r="48"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="5 7"
                            opacity=".3"
                        />
                    </svg>
                </div>

                <p className="maintenance-eyebrow">
                    CAMMAP · CAMPUS NAVIGATION
                </p>

                <h1>
                    We're making
                    <br />
                    things better.
                </h1>

                <p className="maintenance-description">
                    CamMap is temporarily under maintenance.
                    We're working behind the scenes to improve
                    your campus navigation experience.
                </p>

                <div className="maintenance-notice">
                    <span className="notice-icon">✦</span>
                    <p>We'll be back soon. Thank you for your patience!</p>
                </div>

                <div className="maintenance-footer">
                    <span>CAMMAP</span>
                    <span>MADE FOR CAMPUS EXPLORATION</span>
                </div>

            </div>
        </main>
    );
}
