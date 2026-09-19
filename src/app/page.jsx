"use client";
import "./home.css";
import Button from "@/components/Button/Button";
import CourseVideo from "@/components/CourseVideo/CourseVideo";
import Showreel from "@/components/Showreel/Showreel";
import BarberExperience from "@/components/BarberExperience/BarberExperience";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import Spotlight from "@/components/Spotlight/Spotlight";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import Preloader from "@/components/Preloader/Preloader";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <Preloader />

      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={0.15}>
                <h1>Domínio dos cortes na tesoura.</h1>
              </Copy>
            </div>

            {/* <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={0.45}>
                <p className="sm">&copy; Erick Brisola</p>
                <p className="sm">( Brisola Educação )</p>
              </Copy>
            </div> */}

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={0.3}>
                <p className="lg">
                  Aulas para barbeiros iniciantes ou experientes que querem
                  dominar a tesoura e entregar cortes melhores na rotina real
                  da barbearia.
                </p>
              </Copy>

              <Button delay={0.55} href="#inscricao">
                Quero dominar a tesoura
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CourseVideo />

      <BarberExperience />

      <Showreel />

      <section className="featured-work" id="conteudos">
        <div className="container">
          <div className="featured-work-header-content">
            <div className="featured-work-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>O que você vai dominar</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="featured-work-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  Cinco cortes de tesoura, do social ao cabelo longo, com
                  divisões, angulações, textura, projeção, conexões e
                  finalizações que funcionam na prática.
                </p>
              </Copy>
            </div>
          </div>

          <FeaturedWork />
        </div>
      </section>

      <section className="client-reviews-header-container" id="professor">
        <div className="container">
          <div className="client-reviews-header-content">
            <div className="client-reviews-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Para quem são as aulas</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="client-reviews-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  Para quem está começando e quer uma base sólida, ou para quem
                  já atende e precisa ganhar segurança, velocidade e repertório
                  na tesoura. Você não precisa ser avançado: as técnicas se
                  adaptam a cabelos finos, grossos ou cacheados e a diferentes
                  formatos de cabeça.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <ClientReviews />

      <Spotlight />

      <Testimonials />

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
