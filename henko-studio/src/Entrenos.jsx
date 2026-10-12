import ServicioDetalle from "./ServicioDetalle.jsx";

const SERVICIO = {
  number: "02",
  title: "Entrenos",
  subtitle: "Tu práctica, a tu ritmo y desde donde estés.",
  intro:
    "Vídeos individuales, packs temáticos y retos para que puedas organizar tu práctica según tus objetivos y el tiempo que tengas.",
  sections: [
    {
      title: "Vídeos individuales",
      description:
        "Elige una sesión concreta y sigue la práctica cuando mejor te venga. El formato en vídeo te permite volver a las indicaciones y avanzar a tu propio ritmo.",
      items: [
        "Una opción flexible para encajar el movimiento en tu rutina.",
        "Indicaciones para acompañarte durante la práctica.",
        "La posibilidad de repetir la sesión cuando quieras.",
      ],
    },
    {
      title: "Packs temáticos",
      description:
        "Reúne varias propuestas de entrenamiento en torno a un mismo objetivo para dar continuidad a tu práctica y explorar diferentes sesiones.",
      items: [
        "Sesiones agrupadas por temática.",
        "Una forma sencilla de planificar qué practicar.",
        "Opciones para descubrir nuevos ejercicios progresivamente.",
      ],
    },
    {
      title: "Retos",
      description:
        "Propuestas por tiempo limitado para sumar constancia y motivación a tu práctica. Cada reto ofrece una manera concreta de marcarte un objetivo y seguir tu propio progreso.",
      items: [
        "Una propuesta con una duración definida.",
        "Un objetivo que te ayuda a mantener la regularidad.",
        "Un ritmo flexible para adaptarlo a tu día a día.",
      ],
    },
  ],
  action:
    "Los entrenos son contenido de pago. Escríbeme para consultar las opciones disponibles.",
  note: "Contenido de pago",
};

export default function Entrenos() {
  return <ServicioDetalle servicio={SERVICIO} />;
}
