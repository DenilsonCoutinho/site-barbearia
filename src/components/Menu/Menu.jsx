"use client";
import "./Menu.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const items = [
  ["Início", "#inicio"],
  ["O curso", "#curso"],
  ["Meu método", "#professor"],
  ["Conteúdos", "#conteudos"],
  ["Inscreva-se", "#inscricao"],
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    open ? lenis.stop() : lenis.start();
    return () => lenis.start();
  }, [lenis, open]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    gsap.to(overlayRef.current, {
      clipPath: next
        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      duration: 0.85,
      ease: "expo.inOut",
    });
    gsap.to(linksRef.current?.children || [], {
      y: next ? "0%" : "110%",
      opacity: next ? 1 : 0,
      duration: 0.65,
      stagger: 0.06,
      delay: next ? 0.12 : 0,
      ease: "expo.out",
    });
  };

  const goTo = (route) => {
    document.querySelector(route)?.scrollIntoView({ behavior: "smooth" });
    if (open) toggle();
  };

  return (
    <>
      <nav className="site-nav">
        <a className="nav-logo" href="#inicio" onClick={(e) => { e.preventDefault(); goTo("#inicio"); }}>
          <img src="/logo-brisola.png" alt="Logo da Barbearia Brisola" />
        </a>
        <button className="nav-toggle" type="button" onClick={toggle} aria-expanded={open}>
          {open ? "Fechar" : "Menu"}
        </button>
      </nav>

      <div className="menu-overlay" ref={overlayRef} aria-hidden={!open}>
        <div className="menu-panel">
          <div className="menu-intro">
            <p className="menu-eyebrow">Domínio dos Cortes na Tesoura</p>
            <p>Aprenda comigo, no ritmo real da barbearia.</p>
          </div>
          <div className="menu-links" ref={linksRef}>
            {items.map(([label, route]) => (
              <a key={route} href={route} onClick={(e) => { e.preventDefault(); goTo(route); }}>{label}</a>
            ))}
          </div>
          <div className="menu-social">
            <p className="menu-eyebrow">Acompanhe</p>
            <a href="https://www.instagram.com/barbearia.brisola/" target="_blank" rel="noreferrer">@barbearia.brisola</a>
            <a href="https://www.instagram.com/barbeiroerickbrisola/" target="_blank" rel="noreferrer">@barbeiroerickbrisola</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
