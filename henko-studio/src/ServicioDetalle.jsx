export default function ServicioDetalle({ servicio }) {
  return (
    <section className="page-section servicio-detalle-page">
      <div className="wrap">
        <a className="detalle-back" href="/servicios/">
          <span aria-hidden="true">←</span> Volver a servicios
        </a>
        <div className="detalle-heading">
          <h1 className="display">{servicio.title}</h1>
          <p className="detalle-subtitle">{servicio.subtitle}</p>
          <p className="detalle-intro">{servicio.intro}</p>
          {servicio.note && (
            <span className="servicio-note">{servicio.note}</span>
          )}
        </div>
        <div className="detalle-grid">
          {servicio.sections.map((section, index) => (
            <article className="detalle-card" key={section.title}>
              <span className="servicio-tag">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="detalle-action">
          <p>{servicio.action}</p>
          <a className="btn primary" href="/#contacto">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
