import whoamiPhoto from "./assets/whoami.jpeg";
import InstagramIcon from "./InstagramIcon.jsx";

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
      <InstagramIcon />
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
              una parte dulce: recetas propias bajo el nombre Lore Patisserie.
            </p>
          </div>
        </div>

        <article className="about-card">
          <h2>Irati Serrano</h2>
          <p>
            Soy Irati, instructora de pilates y creadora de Henko Studio.
            Me gusta que moverse sea algo cercano y sin prisas: cada persona
            tiene su ritmo y mi trabajo es acompañarte a encontrarlo.
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
            <span className="role">Lore Patisserie</span>
            <p>
              Fuera de la esterilla, la repostería es mi otra pasión. Lore
              Patisserie reúne mis recetas propias: dos oficios distintos que
              comparten la misma idea, cuidar los detalles y hacer las cosas
              a conciencia.
            </p>
            <InstagramLink username="lore.patisserie" label="Lore Patisserie" />
          </article>
        </div>
      </div>
    </section>
  );
}