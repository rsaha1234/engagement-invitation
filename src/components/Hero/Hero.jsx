import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-top-text">
          WITH JOYFUL HEARTS,<br />
          WE INVITE YOU
        </p>

        <h1 className="couple-name">
          Sudip
          <span>&</span>
          Ankita
        </h1>

        <p className="hero-tagline">The Start Of Forever</p>

        <p className="hero-date">30 July 2026</p>

        <div className="hero-divider"></div>

        <p className="hero-event">Engagement Celebration</p>
      </div>
    </section>
  );
}

export default Hero;
