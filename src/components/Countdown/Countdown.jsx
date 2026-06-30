import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {

  const targetDate = new Date(
    "July 30, 2026 19:00:00"
  ).getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();

      const distance =
        targetDate - now;

      setTimeLeft({
        days: Math.floor(
          distance /
          (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance %
            (1000 * 60)) /
            1000
        ),
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="countdown-section">

      <h2>
        The Celebration Begins In
      </h2>

      <div className="countdown-container">

        <div className="time-box">
          <h1>{timeLeft.days}</h1>
          <span>Days</span>
        </div>

        <div className="time-box">
          <h1>{timeLeft.hours}</h1>
          <span>Hours</span>
        </div>

        <div className="time-box">
          <h1>{timeLeft.minutes}</h1>
          <span>Minutes</span>
        </div>

        <div className="time-box">
          <h1>{timeLeft.seconds}</h1>
          <span>Seconds</span>
        </div>

      </div>

    </section>
  );
}

export default Countdown;