import socksPhoto from "./assets/socks.jpeg";
import bridgePhoto from "./assets/bridge.jpeg";
import bookupPhoto from "./assets/bookup.jpeg";

const PILATES_PHOTOS = [
  {
    src: socksPhoto,
    alt: "Ejercicio de pilates con calcetines",
    className: "home-photo home-photo-main",
  },
  {
    src: bridgePhoto,
    alt: "Ejercicio de puente en pilates",
    className: "home-photo home-photo-secondary",
  },
  {
    src: bookupPhoto,
    alt: "Ejercicio de pilates book up",
    className: "home-photo home-photo-detail",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <div className="home-copy">
          <div className="hero-eyebrow">Pilates · movimiento consciente</div>
          <h1 className="display" id="home-title">Henko Studio</h1>
          <p>
            Un espacio para moverte con intención. Clases y acompañamiento en
            pilates para cuidar tu cuerpo a tu propio ritmo.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#servicios">Ver servicios</a>
            <a className="btn" href="#contacto">Contactar</a>
          </div>
        </div>
        <div className="home-photos" aria-label="Imágenes de pilates">
          {PILATES_PHOTOS.map((photo) => (
            <img
              key={photo.src}
              className={photo.className}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}