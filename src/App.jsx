import { useRef, useState } from "react";
import Gate from "./components/Gate/Gate";
import Hero from "./components/Hero/Hero";
import Couple from "./components/Couple/Couple";
import Invitation from "./components/Invitation/Invitation";
import Countdown from "./components/Countdown/Countdown";
import "./App.css";
import "./GoldTheme.css";
import Venue from "./components/Venue/Venue";
import ThankYou from "./components/ThankYou/ThankYou";
import RevealOnScroll from "./components/RevealOnScroll/RevealOnScroll";
import invitationSong from "./assets/song.mp3";

function App() {
  const [entered, setEntered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsMusicPlaying(true);
    } catch {
      setIsMusicPlaying(false);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await startMusic();
    } else {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={invitationSong}
        loop
        preload="auto"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />

      {!entered && (
        <Gate
          onOpen={startMusic}
          onEnter={() => {
            setEntered(true);
          }}
        />
      )}

      {entered && (
        <>
          <main className="page-content page-enter">
            <Hero />
            <RevealOnScroll>
              <Couple />
            </RevealOnScroll>
            <RevealOnScroll>
              <Invitation />
            </RevealOnScroll>
            <RevealOnScroll>
              <Countdown />
            </RevealOnScroll>
            <RevealOnScroll>
              <Venue />
            </RevealOnScroll>
            <RevealOnScroll>
              <ThankYou />
            </RevealOnScroll>
          </main>

          <button
            className={`music-control ${isMusicPlaying ? "is-playing" : ""}`}
            type="button"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? "Pause music" : "Play music"}
            title={isMusicPlaying ? "Pause music" : "Play music"}
          >
            <svg
              className="music-control-icon"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M4 12h6l7-6v20l-7-6H4z" />
              {isMusicPlaying ? (
                <>
                  <path d="M21 11c2.7 2.7 2.7 7.3 0 10" />
                  <path d="M25 7c4.9 4.9 4.9 13.1 0 18" />
                </>
              ) : (
                <>
                  <path d="m22 12 7 7" />
                  <path d="m29 12-7 7" />
                </>
              )}
            </svg>
          </button>
        </>
      )}
    </>
  );
}

export default App;
