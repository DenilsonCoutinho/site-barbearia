"use client";
import "./Showreel.css";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LuVolumeX, LuVolume } from "react-icons/lu";

gsap.registerPlugin(useGSAP);

const Showreel = () => {
  const showreelSecRef = useRef(null);
  const audioRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const totalFrames = 6;
  const frameInterval = 900;

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);

      if (!audioRef.current.muted && audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  };

  useGSAP(
    () => {
      const frameTimeline = gsap.timeline({ repeat: -1 });

      for (let i = 1; i <= totalFrames; i++) {
        frameTimeline.add(() => {
          setCurrentFrame(i);
        }, (i - 1) * (frameInterval / 1000));
      }

      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }

      return () => {
        frameTimeline.kill();
      };
    },
    { scope: showreelSecRef }
  );

  return (
    <section className="showreel" ref={showreelSecRef}>
      <div className="showreel-container">
        <img
          src={`/showreel/showreel-frame-${currentFrame}.jpg`}
          alt="Showreel frame"
        />
      </div>

      <div className={`volume-icon ${!isMuted ? "is-playing" : ""}`} onClick={toggleMute}>
        {isMuted ? (
          <LuVolumeX color="#171412" size={25} />
        ) : (
          <LuVolume color="#171412" size={25} />
        )}
      </div>

      <audio
        ref={audioRef}
        src="/showreel/showreel_music.mp3"
        loop
        muted={isMuted}
      />
    </section>
  );
};

export default Showreel;
