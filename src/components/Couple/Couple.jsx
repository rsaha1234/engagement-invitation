import "./Couple.css";

import bride from "../../assets/bride.jpg";
import groom from "../../assets/groom.jpg";

function Couple() {
  return (
    <section className="couple-section">
      <div className="couple-heading">
        <span>Our Story Begins</span>
        <h2>Meet The Couple</h2>
      </div>

      <p className="couple-subtitle">
        A beautiful journey begins with love, laughter and a promise forever.
      </p>

      <div className="couple-container">
        <article className="person glass-card">
          <div className="image-frame groom-frame">
            <img src={groom} alt="Sudip" />
          </div>

          <div className="person-copy">
            <span className="person-label">Groom Intro</span>
            <h3>Sudip</h3>
            <p>
              Calm, kind and deeply caring, he steps into forever with love in
              his heart.
            </p>
          </div>
        </article>

        <div className="couple-mark" aria-hidden="true">
          <span></span>
        </div>

        <article className="person glass-card">
          <div className="image-frame bride-frame">
            <img src={bride} alt="Ankita" />
          </div>

          <div className="person-copy">
            <span className="person-label">Bride Intro</span>
            <h3>Ankita</h3>
            <p>
              Graceful, warm and full of joy, she brings a soft sparkle to every
              moment.
            </p>
          </div>
        </article>
      </div>

      <p className="couple-quote">Together is a beautiful place to be.</p>
    </section>
  );
}

export default Couple;
