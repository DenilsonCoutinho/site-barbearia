import "./BarberExperience.css";
import Copy from "../Copy/Copy";

const BarberExperience = () => {
  return (
    <section className="barber-experience" id="curso">
      <div className="barber-experience-copy">
        <Copy animateOnScroll={true}>
          <p className="sm">Como eu ensino</p>
        </Copy>
        <Copy animateOnScroll={true} delay={0.1}>
          <h2>Mais que um corte. Técnica que marca.</h2>
        </Copy>
        <Copy animateOnScroll={true} delay={0.2}>
          <p className="barber-experience-text">
            Aprenda a ler cada formato de cabeça, conduzir a tesoura com
            segurança e entregar o acabamento que faz o cliente voltar. O
            método é direto, sem divisões desnecessárias e sem exigir a melhor
            ferramenta do mundo — apenas prática e precisão.
          </p>
        </Copy>
      </div>

      <div className="barber-experience-collage" aria-label="Fotos da Barbearia Brisola">
        <div className="barber-experience-frame barber-experience-frame-top">
          <img src="/brisola-post/timeless-1.jpg" alt="Corte clássico na Barbearia Brisola" />
        </div>
        <div className="barber-experience-frame barber-experience-frame-bottom">
          <img src="/brisola-post/pompadour-2.jpg" alt="Detalhe de corte feito na Brisola" />
        </div>
        <div className="barber-experience-accent" aria-hidden="true" />
      </div>
    </section>
  );
};

export default BarberExperience;
