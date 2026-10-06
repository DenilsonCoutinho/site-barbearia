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
import React, { useEffect } from "react";
import { LuScissors } from "react-icons/lu";
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
      <section className="hero" id="inicio">
        <div className="hero-marquee" aria-label="Informações do curso">
          <div className="hero-marquee-track">
            <div className="hero-marquee-group">
              <span>Inscrições abertas</span>
              <span>Acesso imediato</span>
              <span>Conteúdo objetivo</span>
            </div>
            <div className="hero-marquee-group" aria-hidden="true">
              <span>Inscrições abertas</span>
              <span>Acesso imediato</span>
              <span>Conteúdo objetivo</span>
            </div>
            <div className="hero-marquee-group" aria-hidden="true">
              <span>Inscrições abertas</span>
              <span>Acesso imediato</span>
              <span>Conteúdo objetivo</span>
            </div>
            <div className="hero-marquee-group" aria-hidden="true">
              <span>Inscrições abertas</span>
              <span>Acesso imediato</span>
              <span>Conteúdo objetivo</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <h1>
                Domine a tesoura, conquiste mais clientes e{" "}
                <em>aumente o valor do seu trabalho.</em>
              </h1>
            </div>

            {/* <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={0.45}>
                <p className="sm">&copy; Erick Brisola</p>
                <p className="sm">( Brisola Educação )</p>
              </Copy>
            </div> */}

            <div className="hero-footer">
              <p className="lg">
                Técnica aplicada para você entregar cortes personalizados,
                trabalhar com mais confiança e transformar a tesoura em uma
                ferramenta de resultado.
              </p>

              <Button delay={0.55} href="https://pay.kiwify.com.br/yLo4A52">
                Quero dominar a tesoura
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="sales-problem" id="metodo">
        <div className="container">
          <div className="sales-problem-intro">
            <div className="sales-problem-heading">
              <p className="eyebrow">Mais domínio. Mais confiança.</p>
              <h2>
                Você sabe que <strong>dominar a tesoura</strong> pode elevar o
                seu nível como barbeiro. Mas talvez ainda...
              </h2>
            </div>
            <div className="sales-problem-authority">
              <img
                src="/brisola/erick-authority.jpeg"
                alt="Erick Brisola, professor do curso Domínio dos Cortes na Tesoura"
                loading="lazy"
                decoding="async"
              />
              <span className="sales-problem-authority-signature">
                <span>Erick Brisola</span>
              </span>
              <div className="sales-problem-authority-badge">
                <strong>10+</strong>
                <span>
                  anos de experiência<br />
                  <b>+20 certificações</b>
                </span>
              </div>
            </div>
          </div>

          <ul className="sales-problem-list">
            <li><LuScissors className="list-icon" aria-hidden="true" /><strong>Corta na tesoura</strong>, mas não fica satisfeito com o resultado final.</li>
            <li><LuScissors className="list-icon" aria-hidden="true" />Não se sente seguro para executar com tranquilidade o corte que o cliente pediu.</li>
            <li><LuScissors className="list-icon" aria-hidden="true" />Às vezes tenta convencer o cliente a mudar o corte porque não se sente seguro para executar <strong>o que ele pediu</strong>.</li>
            <li><LuScissors className="list-icon" aria-hidden="true" />Vê outros barbeiros fazendo <strong>bons cortes na tesoura</strong> e sente que está ficando para trás.</li>
            <li><LuScissors className="list-icon" aria-hidden="true" />Não sabe exatamente como criar <strong>camadas, dar leveza e movimento</strong> ao corte.</li>
            <li><LuScissors className="list-icon" aria-hidden="true" />Fica tenso quando o cliente senta na cadeira e pede um <strong>corte todo na tesoura</strong>.</li>
          </ul>

          <div className="sales-problem-conclusion">
            <p>
              Se você se identificou, talvez o que esteja faltando não seja
              talento, mas técnica.
            </p>
            <p>
              É exatamente isso que você vai desenvolver no Domínio dos Cortes
              na Tesoura.
            </p>
            <Button animateOnScroll={true} href="https://pay.kiwify.com.br/yLo4A52">
              Garantir minha vaga
            </Button>
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
                <h1>5 cortes para dominar a tesoura</h1>
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
                  Aprenda as divisões, angulações, projeções, texturas,
                  conexões e finalizações por trás de cada corte — e adapte
                  essas técnicas a diferentes cabelos e formatos de cabeça.
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
                <h1 className="audience-title">Esse curso é para você que...</h1>
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
              <ul className="audience-list">
                <li><span className="audience-number">01</span>Está começando na profissão e quer construir uma base sólida na tesoura.</li>
                <li><span className="audience-number">02</span>Já atende como barbeiro e quer ganhar mais segurança, velocidade e repertório nos cortes.</li>
                <li><span className="audience-number">03</span>Sente que depende demais da máquina e quer desenvolver sua técnica com a tesoura.</li>
                <li><span className="audience-number">04</span>Quer ampliar os tipos de corte que oferece aos seus clientes.</li>
                <li><span className="audience-number">05</span>Quer aumentar a percepção de valor do seu serviço e ampliar seu potencial de ganhos.</li>
                <li><span className="audience-number">06</span>Quer entregar cortes mais personalizados, adaptando a técnica a diferentes tipos de cabelo e formatos de cabeça.</li>
                <li><span className="audience-number">07</span>Quer aprender de forma prática, sem ficar perdido em teoria ou divisões desnecessárias.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <ClientReviews />

      <Spotlight />

      <Testimonials />

      <div className="instructor-marquee" aria-label="Informações do curso">
        <div className="instructor-marquee-track">
          <div className="instructor-marquee-group">
            <span>Inscrições abertas</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Acesso imediato</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Conteúdo objetivo</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
          </div>
          <div className="instructor-marquee-group" aria-hidden="true">
            <span>Inscrições abertas</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Acesso imediato</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Conteúdo objetivo</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
          </div>
          <div className="instructor-marquee-group" aria-hidden="true">
            <span>Inscrições abertas</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Acesso imediato</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Conteúdo objetivo</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
          </div>
          <div className="instructor-marquee-group" aria-hidden="true">
            <span>Inscrições abertas</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Acesso imediato</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
            <span>Conteúdo objetivo</span>
            <LuScissors className="instructor-marquee-icon" aria-hidden="true" />
          </div>
        </div>
      </div>

      <section className="instructor" id="erick">
        <div className="container">
          <p className="eyebrow">Quem vai te ensinar</p>
          <div className="instructor-content">
            <div className="instructor-profile">
              <h2>Quem é Erick Brisola</h2>
              <figure className="instructor-portrait">
                <img
                  src="/brisola/erick-portrait.jpeg"
                  alt="Erick Brisola, professor do curso Domínio dos Cortes na Tesoura"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="instructor-copy">
              <img
                className="instructor-copy-mark"
                src="/logo-dominio-tesoura.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              <p>
                Erick Brisola é barbeiro, professor, consultor e proprietário
                da Barbearia Brisola, em Jaraguá do Sul, SC.
              </p>
              <p>
                São 10 anos de experiência na barbearia, mais de 20
                certificações — incluindo Pivot Point e Schorem — e mais de 5
                anos formando barbeiros.
              </p>
              <p>
                Experiência de cadeira que virou método: técnica clara,
                aplicável e pensada para a rotina real da barbearia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
