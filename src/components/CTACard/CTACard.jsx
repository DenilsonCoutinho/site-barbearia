"use client";
import "./CTACard.css";
import Button from "../Button/Button";
import Copy from "../Copy/Copy";

const CTACard = () => {
  return (
    <section className="cta" id="inscricao">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card-copy">
            <div className="cta-card-col cta-card-intro">
              <Copy animateOnScroll={true}>
                <p className="sm">Oferta</p>
                <h3>Domine a tesoura. Eleve o nível dos seus cortes.</h3>
              </Copy>
            </div>

            <div className="cta-card-col cta-card-offer">
              <div className="price-box">
                <div className="price-box-header">
                  <span className="price-label">Condição especial</span>
                    <span className="price-access">Oferta limitada</span>
                </div>
                  <span className="price-old">De <s>R$ 219,90</s></span>
                  <span className="price-now">Por apenas</span>
                  <div className="price-value">
                    <span>R$</span>
                    <strong>127</strong>
                    <sup>,90</sup>
                  </div>
                  <span className="price-note">Ou 10x de R$ 12,79</span>
                  <span className="price-dogao">Menos que um dogão por mês.</span>
                  <p className="cta-receives">Você recebe:</p>
                  <ul className="cta-benefits">
                    <li>Curso completo</li>
                    <li>5 horas de conteúdo</li>
                    <li>Acesso online imediato</li>
                    <li>Bônus: e-book “5 Dicas para Lotar sua Agenda”</li>
                    <li>Certificado de conclusão</li>
                  </ul>
                <Button animateOnScroll={true} delay={0.25} variant="dark" href="#inscricao">
                  Quero dominar a tesoura
                </Button>
                <span className="price-reassurance">Compra segura · acesso liberado na hora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
