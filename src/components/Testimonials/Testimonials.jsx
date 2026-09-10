import "./Testimonials.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Dominar a tesoura era o que faltava pra minha bancada subir de nível. O curso vai direto na dor de quem tá no dia a dia da barbearia, sem enrolação. Recomendo demais!",
    name: "Edie Aikau dos Santos",
    image: true,
  },
  { quote: "Espaço reservado para o próximo depoimento.", name: "Próximo aluno" },
  { quote: "Espaço reservado para o próximo depoimento.", name: "Próximo aluno" },
  { quote: "Espaço reservado para o próximo depoimento.", name: "Próximo aluno" },
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
                    <img
                      src="/testimonials/edie-aikau.jpg"
                      alt="Edie Aikau dos Santos"
                    />
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
      </div>
    </section>
  );
};

export default Testimonials;
