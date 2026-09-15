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
      />
      <div className="barber-experience-copy">
        <Copy animateOnScroll={true}>
          <p className="sm">Como eu ensino</p>
        </Copy>
        <Copy animateOnScroll={true} delay={0.1}>
          <h2>Domine a arte da tesoura sem enrolação.</h2>
        </Copy>
        <Copy animateOnScroll={true} delay={0.2}>
          <p className="barber-experience-text">
            Entregue um corte perfeito, personalizado de acordo com cada
            formato de crânio. O método é direto e prático, sem divisões
            desnecessárias. Trazendo mais confiança e fidelização para cada
            cliente.
          </p>
        </Copy>
      </div>

      <div className="barber-experience-collage" aria-label="Fotos da Barbearia Brisola">
        <div className="barber-experience-frame barber-experience-frame-top">
          <img src="/brisola/aula-turma.webp" alt="Erick Brisola conduzindo a aula com a turma acompanhando" />
        </div>
        <div className="barber-experience-frame barber-experience-frame-bottom">
          <img src="/brisola/conexao.webp" alt="Alunos da Brisola durante a aula" />
        </div>
        <div className="barber-experience-accent" aria-hidden="true" />
      </div>
      <img
        className="barber-experience-divider barber-experience-divider-bottom"
        src="/ornaments/experience-divider.png"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default BarberExperience;
