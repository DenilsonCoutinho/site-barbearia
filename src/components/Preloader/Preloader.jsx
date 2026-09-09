"use client";

import "./Preloader.css";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export let isInitialLoad = true;

const Preloader = () => {
  const [visible, setVisible] = useState(isInitialLoad);
  const lenis = useLenis();

  useEffect(() => {
    if (!visible) return undefined;

    lenis?.stop();
    const timer = window.setTimeout(() => {
      setVisible(false);
      isInitialLoad = false;
      lenis?.start();
    }, 1300);

    return () => window.clearTimeout(timer);
  }, [visible, lenis]);

  if (!visible) return null;

  return (
    <div
      className="preloader"
      role="status"
      aria-label="Carregando Brisola Educação"
    >
      <img src="/logo-brisola.png" alt="Brisola Educação" />
    </div>
  );
};

export default Preloader;
