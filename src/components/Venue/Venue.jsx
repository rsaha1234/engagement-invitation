import "./Venue.css";

function Venue() {
  return (
    <section className="venue-section">
      <div className="venue-card">
        <span className="venue-label">Where We Celebrate</span>
        <h2>Celebration Venue</h2>

        <div className="location-icon" aria-hidden="true"></div>

        <h3>The Royal Poly Banquet</h3>

        <p className="address">Habra, West Bengal</p>

        <div className="event-details">
          <p>
            <span>Date</span>
            30 July 2026
          </p>
          <p>
            <span>Time</span>
            10:30 AM Onwards
          </p>
        </div>

        <div className="divider"></div>

        <h4>Navigate To Venue</h4>

        <p className="welcome-text">We look forward to welcoming you.</p>

        <a
          href="https://maps.app.goo.gl/iPhGEhBhDiGKZ3GK6"
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

export default Venue;
