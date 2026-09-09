"use client";
import { useEffect, useState, useRef } from "react";
import { ReactLenis } from "lenis/react";
import Menu from "./components/Menu/Menu";

export default function ClientLayout({ children }) {
  const pageRef = useRef();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollSettings = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true,
  };

  const content = (
    <>
      <Menu pageRef={pageRef} />

      <div className="page" ref={pageRef}>
        {children}
      </div>
    </>
  );

  // Mobile keeps the browser's native scrolling; Lenis remains desktop-only.
  return isMobile ? content : (
    <ReactLenis root options={scrollSettings}>
      {content}
    </ReactLenis>
  );
}
