"use client";
import "./CTACard.css";
import Button from "../Button/Button";
import Copy from "../Copy/Copy";

const CTACard = () => {
  return (
    <section className="cta" id="inscricao">
      <div className="container">
        <div className="cta-copy">
          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="sm">Domínio dos Cortes na Tesoura</p>
            </Copy>
          </div>

          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="lg">
                Cinco cortes na tesoura, técnica direta e aplicação real para a
                rotina da sua barbearia.
              </p>
            </Copy>

            <Button
              animateOnScroll={true}
              delay={0.25}
              variant="dark"
              href="#inscricao"
            >
              Quero me profissionalizar
            </Button>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-card-copy">
            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <h3>Entre para a aula</h3>
              </Copy>
            </div>

            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <p>
                  Em 5 horas, eu vou conduzir você por divisões, angulações,
                  textura, projeção, camadas e conexões — tudo no ritmo de quem
                  vive a rotina da barbearia.
                </p>

                <p>
                  Certificado incluso. Sem enrolação e sem exigir ferramentas
                  caras: apenas técnica, prática e precisão.
                </p>
              </Copy>

              <div className="price-box">
                <span className="price-label">Investimento</span>
                <strong>R$ 97,00</strong>
                <span className="price-note">Acesso ao curso + certificado</span>
                <Button animateOnScroll={true} delay={0.25} variant="light" href="#inscricao">
                  Quero garantir minha vaga
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
