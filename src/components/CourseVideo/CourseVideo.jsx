import "./CourseVideo.css";

const CourseVideo = () => {
  return (
    <section className="course-video" aria-label="Vídeo da aula prática">
      <div className="course-video-copy">
        <h2>A TESOURA NÃO PRECISA SER UM BICHO DE SETE CABEÇAS.</h2>
      </div>
      <div className="course-video-player">
        <iframe
          src="https://www.youtube.com/embed/pmLPnwkzDbc?rel=0&playsinline=1"
          title="Aula prática com Erick Brisola"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default CourseVideo;
