import { useEffect, useRef, useState } from "react";
import Clases from "./Clases.jsx";
import Contacto from "./Contacto.jsx";
import Entrenos from "./Entrenos.jsx";
import Home from "./Home.jsx";
import Informacion from "./Informacion.jsx";
import QuienesSomos from "./QuienesSomos.jsx";
import Recetas from "./Recetas.jsx";
import Servicios from "./Servicios.jsx";

const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio", page: "inicio" },
  { href: "/#quienes-somos", label: "Quiénes somos", page: "quienes-somos" },
  { href: "/servicios/", label: "Servicios", page: "servicios" },
  { href: "/#recetas", label: "Recetas", page: "recetas" },
  { href: "/#contacto", label: "Contacto", page: "contacto" },
];

const SERVICE_LINKS = [
  { href: "/servicios/#informacion", label: "Información" },
  { href: "/servicios/#entrenos", label: "Entrenos" },
  { href: "/servicios/#clases-y-reuniones", label: "Clases y reuniones" },
];

const SERVICE_PAGES = {
  informacion: <Informacion />,
  entrenos: <Entrenos />,
  "clases-y-reuniones": <Clases />,
};

const PAGE_TITLES = {
  inicio: "Pilates y movimiento consciente",
  "quienes-somos": "Quiénes somos",
  servicios: "Servicios",
  recetas: "Recetas · Lore Patisserie",
  contacto: "Contacto",
  informacion: "Información",
  entrenos: "Entrenos",
  "clases-y-reuniones": "Clases y reuniones",
};

function getPageFromLocation() {
  const hash = window.location.hash.slice(1);
  const isServicesRoute = /^\/servicios\/?$/.test(window.location.pathname);

  if (isServicesRoute) {
    return SERVICE_PAGES[hash] ? hash : "servicios";
  }

  const rootPage = NAV_LINKS.find((link) => link.href === `/#${hash}`);
  return rootPage?.page ?? "inicio";
}

export default function HenkoStudio() {
  const [currentPage, setCurrentPage] = useState(getPageFromLocation);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncPage = () => setCurrentPage(getPageFromLocation());
    window.addEventListener("hashchange", syncPage);
    window.addEventListener("popstate", syncPage);
    return () => {
      window.removeEventListener("hashchange", syncPage);
      window.removeEventListener("popstate", syncPage);
    };
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = `Henko Studio · ${PAGE_TITLES[currentPage] ?? ""}`;

    // No desplazar en la carga inicial; respetar "reducir movimiento".
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const page = {
    inicio: <Home />,
    "quienes-somos": <QuienesSomos />,
    servicios: <Servicios />,
    recetas: <Recetas />,
    contacto: <Contacto />,
    ...SERVICE_PAGES,
  }[currentPage];
  const activeNavigationPage = Object.hasOwn(SERVICE_PAGES, currentPage)
    ? "servicios"
    : currentPage;

  const renderNavigationLink = (link, mobile = false) => {
    const linkElement = (
      <a
        href={link.href}
        aria-current={activeNavigationPage === link.page ? "page" : undefined}
        onClick={mobile ? () => setMenuOpen(false) : undefined}
      >
        {link.label}
      </a>
    );

    if (link.page !== "servicios") {
      return <span key={link.href}>{linkElement}</span>;
    }

    return (
      <div
        className={mobile ? "mobile-services" : "nav-dropdown"}
        key={link.href}
      >
        {linkElement}
        <div
          className={mobile ? "mobile-service-links" : "service-submenu"}
          aria-label="Páginas de servicios"
        >
          {SERVICE_LINKS.map((serviceLink) => (
            <a
              key={serviceLink.href}
              href={serviceLink.href}
              aria-current={
                window.location.hash === serviceLink.href.slice("/servicios/".length)
                  ? "page"
                  : undefined
              }
              onClick={mobile ? () => setMenuOpen(false) : undefined}
            >
              {serviceLink.label}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="henko">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="header">
        <div className="header-inner">
          <a className="logo-mark" href="/#inicio" aria-label="Henko Studio, inicio">
            <span className="logo-circle">H · S</span>
            <span className="display logo-word">Henko Studio</span>
          </a>
          <nav aria-label="Navegación principal">
            {NAV_LINKS.map((link) => renderNavigationLink(link))}
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
          {NAV_LINKS.map((link) => renderNavigationLink(link, true))}
        </nav>
      </header>

      <main className="page-main" id="contenido" tabIndex={-1}>{page}</main>

      <footer>© {new Date().getFullYear()} Henko Studio</footer>
    </div>
  );
}
