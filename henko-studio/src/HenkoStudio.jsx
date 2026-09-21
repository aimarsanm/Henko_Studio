import React, { useState } from "react";

/**
 * Henko Studio — informative landing page
 * -----------------------------------------------------------------------
 * Paleta:
 *   Fondo principal ......... #EFE7DA (beige cálido, como el logo)
 *   Fondo alterno ............ #FFFFFF
 *   Líneas / decoración ...... #D8C9AF
 *   Tipografía / texto ....... #211D19
 *   Acento (links/títulos) ... #6E2430 (vino)
 *   Acento sección recetas ... #7C8354 (verde oliva, marca "This is Floral")
 *
 * Tipografía:
 *   Titulares — 'Cormorant Garamond' (serif fina, elegante, versalitas)
 *   Cuerpo — 'Manrope' (lineal, sobria, gran legibilidad)
 *
 * No requiere Tailwind ni ninguna librería externa: los estilos van
 * embebidos en un <style> propio del componente, así funciona en
 * cualquier proyecto React (CRA, Vite, Next…). Solo hace falta conexión
 * a internet para las dos Google Fonts importadas al principio del CSS;
 * si el proyecto no puede cargar fuentes externas, basta con borrar el
 * @import y las reglas font-family caerán a las alternativas del sistema.
 */

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#recetas", label: "Recetas" },
  { href: "#contacto", label: "Contacto" },
];

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

const RRSS = [
  { label: "Instagram", href: "#" },
  { label: "correo@henkostudio.com", href: "mailto:correo@henkostudio.com" },
];

export default function HenkoStudio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="henko">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Manrope:wght@300;400;500;600&display=swap');

        .henko {
          --bg: #EFE7DA;
          --bg-alt: #FFFFFF;
          --line: #D8C9AF;
          --ink: #211D19;
          --ink-soft: #58524A;
          --wine: #6E2430;
          --olive: #7C8354;

          background: var(--bg);
          min-height: 100vh;
          width: 100%;
          color: var(--ink);
          font-family: 'Manrope', -apple-system, sans-serif;
          font-weight: 300;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .henko * { box-sizing: border-box; }

        .henko a { color: inherit; text-decoration: none; }

        .henko .display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #211D19;
        }

        .henko .wrap {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---------- Header ---------- */
        .henko .header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(239, 231, 218, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }

        .henko .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 32px;
          max-width: 1080px;
          margin: 0 auto;
        }

        .henko .logo-mark {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .henko .logo-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .henko .logo-word {
          font-size: 15px;
          letter-spacing: 0.22em;
        }

        .henko nav {
          display: flex;
          gap: 36px;
        }

        .henko nav a {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-soft);
          transition: color 0.2s ease;
        }

        .henko nav a:hover { color: var(--wine); }

        .henko .menu-btn {
          display: none;
          background: none;
          border: 1px solid var(--ink);
          border-radius: 999px;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .henko .menu-btn span,
        .henko .menu-btn span::before,
        .henko .menu-btn span::after {
          content: '';
          display: block;
          width: 16px;
          height: 1px;
          background: var(--ink);
          position: relative;
        }
        .henko .menu-btn span::before { position: absolute; top: -5px; }
        .henko .menu-btn span::after { position: absolute; top: 5px; }

        .henko .mobile-nav {
          display: none;
          flex-direction: column;
          border-bottom: 1px solid var(--line);
          background: var(--bg);
        }
        .henko .mobile-nav.open { display: flex; }
        .henko .mobile-nav a {
          padding: 14px 32px;
          border-top: 1px solid var(--line);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 720px) {
          .henko nav { display: none; }
          .henko .menu-btn { display: flex; }
        }

        /* ---------- Hero ---------- */
        .henko .hero {
          padding: 110px 32px 90px;
          text-align: center;
          position: relative;
        }

        .henko .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 56px;
          background: var(--line);
        }

        .henko .hero-eyebrow {
          font-size: 13px;
          letter-spacing: 0.28em;
          color: var(--wine);
          margin-bottom: 22px;
        }

        .henko .hero h1 {
          font-size: clamp(44px, 8vw, 84px);
          margin: 0 0 26px;
          font-weight: 300;
          color: #211D19;
        }

        .henko .hero p {
          max-width: 480px;
          margin: 0 auto;
          color: var(--ink-soft);
          font-size: 16px;
        }

        .henko .hero-actions {
          margin-top: 44px;
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .henko .btn {
          padding: 14px 30px;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 999px;
          cursor: pointer;
          border: 1px solid var(--ink);
          background: transparent;
        }

        .henko .btn.primary {
          background: var(--wine);
          border-color: var(--wine);
          color: #fff;
        }

        /* ---------- Sections shared ---------- */
        .henko section { padding: 96px 0; }

        .henko .section-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 40px;
          margin-bottom: 56px;
          align-items: end;
          border-bottom: 1px solid var(--line);
          padding-bottom: 32px;
        }

        .henko .section-head .kicker {
          font-size: 13px;
          letter-spacing: 0.2em;
          color: var(--wine);
        }

        .henko .section-head h2 {
          font-size: clamp(30px, 4vw, 42px);
          margin: 10px 0 0;
          font-weight: 400;
        }

        .henko .section-head .lede {
          color: var(--ink-soft);
          font-size: 15px;
          max-width: 460px;
        }

        @media (max-width: 720px) {
          .henko .section-head { grid-template-columns: 1fr; }
        }

        /* ---------- Quiénes somos ---------- */
        .henko .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }

        .henko .about-card h3 {
          font-size: 22px;
          font-weight: 400;
          margin: 0 0 6px;
        }

        .henko .about-card .role {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--wine);
          margin-bottom: 18px;
          display: block;
        }

        .henko .about-card p {
          color: var(--ink-soft);
          font-size: 15px;
        }

        .henko .avatar-circle {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          border: 1px solid var(--ink);
          margin-bottom: 22px;
        }

        @media (max-width: 720px) {
          .henko .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        /* ---------- Servicios ---------- */
        .henko .servicios-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .henko .servicio-card {
          background: var(--bg-alt);
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .henko .servicio-tag {
          font-family: 'Cormorant Garamond', serif;
          font-size: 34px;
          color: var(--line);
        }

        .henko .servicio-card h3 {
          font-size: 20px;
          font-weight: 400;
          margin: 0;
        }

        .henko .servicio-card p {
          color: var(--ink-soft);
          font-size: 14px;
          flex-grow: 1;
        }

        .henko .servicio-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--line);
          padding-top: 16px;
        }

        .henko .servicio-card li {
          font-size: 13px;
          padding: 5px 0;
          color: var(--ink);
        }

        .henko .servicio-note {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--wine);
        }

        @media (max-width: 900px) {
          .henko .servicios-grid { grid-template-columns: 1fr; }
        }

        /* ---------- Recetas / This is Floral ---------- */
        .henko .floral-panel {
          background: var(--bg-alt);
          border: 1px solid var(--line);
          padding: 56px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: center;
        }

        .henko .floral-badge {
          width: 128px;
          height: 128px;
          border-radius: 50%;
          background: #A9B07C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: var(--ink);
          margin: 0 auto;
          text-align: center;
          line-height: 1.3;
        }

        .henko .floral-panel .kicker {
          color: var(--olive);
          font-size: 13px;
          letter-spacing: 0.2em;
        }

        .henko .floral-panel h3 {
          font-size: 28px;
          font-weight: 400;
          margin: 10px 0 16px;
        }

        .henko .floral-panel p {
          color: var(--ink-soft);
          font-size: 15px;
        }

        .henko .floral-tags {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .henko .floral-tags span {
          font-size: 12px;
          letter-spacing: 0.06em;
          border: 1px solid var(--olive);
          color: var(--olive);
          padding: 6px 14px;
          border-radius: 999px;
        }

        @media (max-width: 720px) {
          .henko .floral-panel { grid-template-columns: 1fr; padding: 36px; }
        }

        /* ---------- Contacto ---------- */
        .henko .contact {
          background: var(--ink);
          color: var(--bg);
        }

        .henko .contact .wrap {
          padding: 96px 32px;
          text-align: center;
        }

        .henko .contact .kicker { color: #C9A3AB; }

        .henko .contact h2 {
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 400;
          margin: 14px 0 20px;
          color: #D8C9AF;
        }

        .henko .contact p {
          color: #BDB6AC;
          max-width: 420px;
          margin: 0 auto 36px;
          font-size: 15px;
        }

        .henko .rrss-list {
          display: flex;
          gap: 28px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .henko .rrss-list a {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid #6E2430;
          padding-bottom: 4px;
        }

        /* ---------- Footer ---------- */
        .henko footer {
          padding: 28px 32px;
          text-align: center;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--ink-soft);
          background: var(--ink);
          border-top: 1px solid #3a352f;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a className="logo-mark" href="#top">
            <span className="logo-circle">H · S</span>
            <span className="display logo-word">Henko Studio</span>
          </a>
          <nav>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-btn"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-eyebrow">Pilates · movimiento consciente</div>
        <h1 className="display">Henko Studio</h1>
        <p>
          Un espacio para moverte con intención. Clases, entrenos y
          acompañamiento en pilates, pensados para que cuides tu cuerpo a tu
          propio ritmo.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#servicios">
            Ver servicios
          </a>
          <a className="btn" href="#contacto">
            Contactar
          </a>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Quiénes somos</span>
            </div>
            <div>
              <h2 className="display">Un estudio, dos oficios</h2>
              <p className="lede">
                Henko Studio nace como un espacio de pilates cercano, y crece
                con una parte dulce: recetas propias bajo el nombre This is
                Floral.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="avatar-circle" />
              <span className="role">Henko Studio</span>
              <h3>Pilates con propósito</h3>
              <p>
                Henko Studio es un espacio pensado para acompañarte en tu
                práctica de pilates, ya sea que estés empezando o que lleves
                tiempo entrenando. Aquí encontrarás información clara, rutinas
                grabadas y la posibilidad de moverte en clases virtuales en
                directo, todo diseñado para adaptarse a tu día a día.
              </p>
            </div>
            <div className="about-card">
              <div className="avatar-circle" />
              <span className="role">Instructora · Pastelera</span>
              <h3>Detrás del estudio</h3>
              <p>
                Soy la instructora de Henko Studio y, fuera de la esterilla,
                también me dedico a la repostería a través de This is Floral.
                Dos pasiones distintas que comparten la misma idea: cuidar los
                detalles y acompañarte con algo hecho a conciencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ background: "var(--bg-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Servicios</span>
            </div>
            <div>
              <h2 className="display">Lo que puedes encontrar aquí</h2>
              <p className="lede">
                De la teoría a la práctica: información para empezar bien,
                entrenos para moverte y clases para acompañarte de cerca.
              </p>
            </div>
          </div>

          <div className="servicios-grid">
            {SERVICIOS.map((servicio) => (
              <div className="servicio-card" key={servicio.title}>
                <span className="servicio-tag">{servicio.tag}</span>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <ul>
                  {servicio.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {servicio.note && (
                  <span className="servicio-note">{servicio.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recetas / This is Floral */}
      <section id="recetas">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Recetas</span>
            </div>
            <div>
              <h2 className="display">This is Floral</h2>
              <p className="lede">
                La parte dulce de Henko Studio: recetas propias para
                acompañar tu rutina, dentro y fuera de la esterilla.
              </p>
            </div>
          </div>

          <div className="floral-panel">
            <div className="floral-badge">Floral</div>
            <div>
              <span className="kicker">By the instructor</span>
              <h3>Recetas para cuidarte también en la cocina</h3>
              <p>
                Recetas individuales y packs pensados para acompañar tu
                energía diaria. Algunas son gratuitas y otras forman parte de
                packs de pago, siempre con la misma idea detrás: comer con
                cuidado, sin complicarte.
              </p>
              <div className="floral-tags">
                <span>Recetas individuales</span>
                <span>Packs</span>
                <span>Gratis + de pago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="contact" id="contacto">
        <div className="wrap">
          <span className="kicker">Contacto</span>
          <h2 className="display">Hablemos</h2>
          <p>
            ¿Dudas sobre las clases, los entrenos o quieres agendar una
            reunión? Escríbeme o sígueme en redes.
          </p>
          <div className="rrss-list">
            {RRSS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Henko Studio</footer>
    </div>
  );
}
