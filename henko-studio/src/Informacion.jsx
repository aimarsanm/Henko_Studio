import ServicioDetalle from "./ServicioDetalle.jsx";

const SERVICIO = {
  number: "01",
  title: "Información",
  subtitle: "Muévete con confianza, desde el primer paso.",
  intro:
    "Un espacio de consulta para conocer mejor los ejercicios, preparar tu práctica y resolver las dudas habituales antes de empezar.",
  sections: [
    {
      title: "Entiende cada ejercicio",
      description:
        "Encuentra orientación para acercarte a los movimientos con atención y adaptar la práctica a tu experiencia.",
      items: [
        "Pautas para preparar y realizar los ejercicios.",
        "Claves para prestar atención a la postura y la respiración.",
        "Consejos para avanzar poco a poco y escuchar tu cuerpo.",
      ],
    },
    {
      title: "Prepara tu espacio",
      description:
        "No necesitas llenar tu casa de material para empezar. Aquí podrás consultar qué elementos pueden acompañar los entrenos y cómo organizar un lugar cómodo para moverte.",
      items: [
        "Material recomendado según el tipo de ejercicio.",
        "Alternativas sencillas para practicar en casa.",
        "Ideas para preparar un espacio tranquilo y despejado.",
      ],
    },
    {
      title: "Resuelve tus dudas",
      description:
        "Consulta las preguntas frecuentes sobre cómo empezar y, si necesitas una orientación más personal, ponte en contacto para encontrar el mejor siguiente paso.",
      items: [
        "Qué tener en cuenta antes de una sesión.",
        "Cómo elegir entre entrenar por tu cuenta o hacer una clase.",
        "A quién escribir si necesitas más información.",
      ],
    },
  ],
  action: "¿Te queda alguna duda? Escríbeme y lo vemos juntas.",
};

export default function Informacion() {
  return <ServicioDetalle servicio={SERVICIO} />;
}
