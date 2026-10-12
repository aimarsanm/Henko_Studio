import whoamiPhoto from "./assets/whoami.jpeg";

function InstagramLink({ username, label }) {
  return (
    <a
      className="instagram-link"
      href={`https://www.instagram.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar el Instagram de ${label}`}
      title={`Instagram de ${label}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}

export default function QuienesSomos() {
  return (
    <section className="page-section about-page">
      <div className="wrap">
        <div className="section-head about-section-head">
          <div>
            <img
              className="whoami-photo"
              src={whoamiPhoto}
              alt="Instructora de Henko Studio practicando pilates"
            />
            <span className="kicker">Quiénes somos</span>
          </div>
          <div>
            <h1 className="display">Un estudio, dos oficios</h1>
            <p className="lede">
              Henko Studio nace como un espacio de pilates cercano, y crece con
              una parte dulce: recetas propias bajo el nombre This is Floral.
            </p>
          </div>
        </div>

        <article className="about-card">
          <h2>Irati Serrano</h2>
          <p>
            Henko Studio es un espacio pensado para acompañarte en tu práctica
            de pilates, ya sea que estés empezando o que lleves tiempo
            entrenando. Aquí encontrarás información clara, rutinas grabadas y
            la posibilidad de moverte en clases virtuales en directo, todo
            diseñado para adaptarse a tu día a día.
          </p>
          <InstagramLink username="iratiiserrano" label="Irati Serrano" />
        </article>

        <div className="about-grid">
          <article className="about-card">
            <span className="role">Henko Studio</span>
            <p>
              Henko Studio es un espacio pensado para acompañarte en tu práctica
              de pilates, ya sea que estés empezando o que lleves tiempo
              entrenando. Aquí encontrarás información clara, rutinas grabadas
              y la posibilidad de moverte en clases virtuales en directo, todo
              diseñado para adaptarse a tu día a día.
            </p>
            <InstagramLink username="thehenkostudio" label="Henko Studio" />
          </article>
          <article className="about-card">
            <span className="role">This is Floral</span>
            <p>
              Soy la instructora de Henko Studio y, fuera de la esterilla,
              también me dedico a la repostería a través de This is Floral. Dos
              pasiones distintas que comparten la misma idea: cuidar los
              detalles y acompañarte con algo hecho a conciencia.
            </p>
            <InstagramLink username="this.is.floral" label="This is Floral" />
          </article>
        </div>
      </div>
    </section>
  );
}