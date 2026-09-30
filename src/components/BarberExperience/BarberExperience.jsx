import "./BarberExperience.css";
import Copy from "../Copy/Copy";

const BarberExperience = () => {
  return (
    <section className="barber-experience" id="curso">
      <img
        className="barber-experience-divider"
        src="/ornaments/experience-divider.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="barber-experience-copy">
        <Copy animateOnScroll={true} delay={0.1}>
          <h2>
            Mais domínio. <span>Mais confiança.</span>
          </h2>
        </Copy>
        <Copy animateOnScroll={true} delay={0.2}>
          <p className="barber-experience-text">
            Você não precisa da melhor ferramenta do mundo. Precisa de técnica
            aplicada na prática: leitura, precisão e domínio para entregar um
            corte personalizado em cada formato de cabeça.
          </p>
        </Copy>
      </div>

      <div className="barber-experience-collage" aria-label="Fotos da Barbearia Brisola">
        <img
          className="barber-experience-mark"
          src="/logo-dominio-tesoura.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="barber-experience-frame barber-experience-frame-top">
          <img src="/brisola/aula-tesoura.webp" alt="Erick Brisola demonstrando corte na tesoura" loading="lazy" decoding="async" />
        </div>
        <div className="barber-experience-accent" aria-hidden="true" />
      </div>
      <img
        className="barber-experience-divider barber-experience-divider-bottom"
        src="/ornaments/experience-divider.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default BarberExperience;
