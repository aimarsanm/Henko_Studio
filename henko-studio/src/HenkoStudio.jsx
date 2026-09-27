import { useEffect, useState } from "react";
import Contacto from "./Contacto.jsx";
import Home from "./Home.jsx";
import QuienesSomos from "./QuienesSomos.jsx";
import Recetas from "./Recetas.jsx";
import Servicios from "./Servicios.jsx";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#recetas", label: "Recetas" },
  { href: "#contacto", label: "Contacto" },
];

function getPageFromHash() {
  const hash = window.location.hash.slice(1);
  return NAV_LINKS.some((link) => link.href === `#${hash}`)
    ? hash
    : "inicio";
}

export default function HenkoStudio() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncPage = () => setCurrentPage(getPageFromHash());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const page = {
    inicio: <Home />,
    "quienes-somos": <QuienesSomos />,
    servicios: <Servicios />,
    recetas: <Recetas />,
    contacto: <Contacto />,
  }[currentPage];

  return (
    <div className="henko">
      <header className="header">
        <div className="header-inner">
          <a className="logo-mark" href="#inicio" aria-label="Henko Studio, inicio">
            <span className="logo-circle">H · S</span>
            <span className="display logo-word">Henko Studio</span>
          </a>
          <nav aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={currentPage === link.href.slice(1) ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
        <nav
          className={`mobile-nav${menuOpen ? " open" : ""}`}
          aria-label="Navegación móvil"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={currentPage === link.href.slice(1) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main">
        {page}
      </main>

      <footer>© {new Date().getFullYear()} Henko Studio</footer>
    </div>
  );
}