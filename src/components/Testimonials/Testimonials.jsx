import "./Testimonials.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Dominar a tesoura era o que faltava pra minha bancada subir de nível. O curso vai direto na dor de quem tá no dia a dia da barbearia, sem enrolação. Recomendo demais!",
    name: "Edie Aikau dos Santos",
    image: "/testimonials/edie-aikau.jpg",
  },
  {
    quote:
      "Hoje minha gratidão vai ao Erick por compartilhar tanto conhecimento neste curso incrível de corte masculino na tesoura e texturização. Cada técnica e cada ensinamento contribuíram muito para minha evolução profissional. Hoje sinto mais confiança em fazer meus cortes masculinos na tesoura. Obrigado, Erick, por esta experiência e por fazer parte da minha evolução. 🙏🏼🥂",
    name: "Uziel de Ramos",
    image: "/testimonials/aluno-curso-tesoura.png",
  },
  {
    quote:
      "Quando iniciei nessa área, ficava muito tenso quando clientes me pediam cortes na tesoura, achava que era um bixo de 7 cabeças, mal sabia por onde começar, foi quando conheci o Erick e a Barbearia Brisola, fiz o curso e a experiencia foi incrivel, além de aprender varias técnicas que praticadas deixam o corte simples. Hoje sou amigo, e um grande fã do Erick, um incrivel ser humano, e um excelente barbeiro! Sempre que possível quero estar presente em suas aulas, para quem sabe um dia estar no mesmo nível dele!",
    name: "Diogo Martins",
    image: "/testimonials/aluno-brisola.png",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const previous = () => {
    emblaApi?.scrollPrev();
  };

  const next = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-heading">
        <p className="sm">Quem já viveu a prática</p>
        <h2>Depoimentos de quem decidiu evoluir.</h2>
      </div>

      <div className="testimonials-carousel">
        <div className="testimonials-viewport" ref={emblaRef}>
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
                {testimonial.image ? (
                  <div className="testimonial-card-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                ) : (
                  <div className="testimonial-card-image testimonial-card-placeholder" aria-hidden="true" />
                )}
                <div className="testimonial-card-copy">
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {testimonials.length > 1 && (
          <div className="testimonials-controls">
            <button type="button" onClick={previous} aria-label="Depoimento anterior">←</button>
            <div className="testimonials-dots" aria-label="Selecionar depoimento">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Próximo depoimento">→</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
