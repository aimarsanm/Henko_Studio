const SERVICIOS = [
  {
    tag: "01",
    title: "Información",
    description:
      "Antes de moverte, entiende cómo hacerlo bien: consejos para tus ejercicios, qué materiales te pueden servir en casa y todo lo que necesitas saber para empezar con seguridad.",
    items: ["Tips por ejercicio", "Materiales recomendados", "Preguntas frecuentes"],
  },
  {
    tag: "02",
    title: "Entrenos",
    description:
      "Vídeos individuales, packs por objetivo y retos por tiempo limitado, pensados para practicar a tu ritmo, en cualquier momento del día.",
    items: ["Vídeos individuales", "Packs temáticos", "Retos"],
    note: "Contenido de pago",
  },
  {
    tag: "03",
    title: "Clases y reuniones",
    description:
      "Agenda una clase virtual en directo o reserva una reunión individual para resolver dudas, ajustar tu plan o simplemente charlar sobre cómo va tu progreso.",
    items: ["Clases virtuales en directo", "Reuniones 1:1", "Reservas online"],
  },
];

export default function Servicios() {
  return (
    <section className="page-section servicios-page" id="servicios">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Servicios</span>
          </div>
          <div>
            <h1 className="display">Lo que puedes encontrar aquí</h1>
            <p className="lede">
              De la teoría a la práctica: información para empezar bien,
              entrenos para moverte y clases para acompañarte de cerca.
            </p>
          </div>
        </div>

        <div className="servicios-grid">
          {SERVICIOS.map((servicio) => (
            <article className="servicio-card" key={servicio.title}>
              <span className="servicio-tag">{servicio.tag}</span>
              <h2>{servicio.title}</h2>
              <p>{servicio.description}</p>
              <ul>
                {servicio.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {servicio.note && (
                <span className="servicio-note">{servicio.note}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}