const RRSS = [
  { label: "Instagram", href: "https://www.instagram.com/thehenkostudio" },
  { label: "henkostudioinfo@gmail.com", href: "mailto:henkostudioinfo@gmail.com" },
  { label: "YouTube", href: "https://www.youtube.com/@HenkoStudio.0" },
];

export default function Contacto() {
  return (
    <section className="contact-page" id="contacto">
      <div className="contact-content">
        <span className="kicker">Contacto</span>
        <h1 className="display">Hablemos</h1>
        <p>
          ¿Dudas sobre las clases, los entrenos o quieres agendar una reunión?
          Escríbeme o sígueme en redes.
        </p>
        <div className="rrss-list">
          {RRSS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}