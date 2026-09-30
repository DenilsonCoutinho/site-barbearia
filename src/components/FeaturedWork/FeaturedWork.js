"use client";

import "./FeaturedWork.css";
import { projects, reverseProjects } from "./project.js";
import { useEffect, useRef, useState } from "react";

function WorkSet({ items, hidden = false, setRef }) {
  return (
    <div className="featured-work-set" aria-hidden={hidden || undefined} ref={setRef}>
      {items.map((project) => (
        <article className="featured-work-item" key={project.name}>
          <div className="featured-work-frame">
            <div className="featured-work-item-img">
              <img src={project.img} alt={hidden ? "" : project.name} draggable="false" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContinuousCarousel({ items, direction = "left", label }) {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const positionRef = useRef(0);
  const pointerRef = useRef(null);
  const lastFrameRef = useRef(null);
  const defaultSpeed = direction === "right" ? 28 : -28;
  const speedRef = useRef(defaultSpeed);
  const [isDragging, setIsDragging] = useState(false);

  const wrapPosition = () => {
    const setWidth = firstSetRef.current?.offsetWidth;
    if (!setWidth) return;

    while (positionRef.current <= -setWidth) positionRef.current += setWidth;
    while (positionRef.current > 0) positionRef.current -= setWidth;
  };

  const paintTrack = () => {
    wrapPosition();
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  };

  useEffect(() => {
    let animationFrame;

    const animate = (time) => {
      const previous = lastFrameRef.current ?? time;
      lastFrameRef.current = time;

      if (!pointerRef.current) {
        const elapsed = time - previous;
        const returnStrength = Math.min(1, elapsed / 750);
        speedRef.current += (defaultSpeed - speedRef.current) * returnStrength;
        positionRef.current += (speedRef.current * elapsed) / 1000;
        paintTrack();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [defaultSpeed]);

  const handlePointerDown = (event) => {
    pointerRef.current = { id: event.pointerId, x: event.clientX, time: event.timeStamp };
    speedRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const distance = event.clientX - pointerRef.current.x;
    const elapsed = Math.max(event.timeStamp - pointerRef.current.time, 16);

    positionRef.current += distance;
    speedRef.current = Math.max(-560, Math.min(560, (distance / elapsed) * 1000));
    pointerRef.current.x = event.clientX;
    pointerRef.current.time = event.timeStamp;
    paintTrack();
  };

  const handlePointerEnd = (event) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    pointerRef.current = null;
    setIsDragging(false);
  };

  return (
    <div className={`featured-work-carousel featured-work-carousel--${direction}`} aria-label={label}>
      <div
        className={`featured-work-track${isDragging ? " is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        ref={trackRef}
      >
        <WorkSet items={items} setRef={firstSetRef} />
        <WorkSet items={items} hidden />
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <>
      <ContinuousCarousel items={projects} label="Cortes que você vai dominar" />
      <ContinuousCarousel items={reverseProjects} direction="right" label="Mais cortes que você vai dominar" />
    </>
  );
}
