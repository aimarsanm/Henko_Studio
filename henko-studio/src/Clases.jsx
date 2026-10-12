import ServicioDetalle from "./ServicioDetalle.jsx";

const SERVICIO = {
  number: "03",
  title: "Clases y reuniones",
  subtitle: "Acompañamiento directo para una práctica más cercana.",
  intro:
    "Puedes reservar una clase virtual en directo para moverte acompañada o una reunión individual para conversar sobre tus dudas y tu progreso.",
  sections: [
    {
      title: "Clases virtuales en directo",
      description:
        "Comparte una sesión online en tiempo real y sigue las indicaciones durante la práctica. Es una forma de reservar un momento para moverte con acompañamiento.",
      items: [
        "Una clase guiada en directo desde tu espacio.",
        "Indicaciones durante la sesión para acompañar los ejercicios.",
        "La comodidad de practicar online.",
      ],
    },
    {
      title: "Reuniones individuales",
      description:
        "Reserva un espacio 1:1 para hablar de lo que necesitas: resolver dudas, revisar cómo va tu práctica o conversar sobre cómo ajustar tu plan.",
      items: [
        "Atención individual y conversación cercana.",
        "Un espacio para compartir tus dudas y objetivos.",
        "Seguimiento de cómo te sientes con tu práctica.",
      ],
    },
    {
      title: "Cómo reservar",
      description:
        "Cuéntame qué tipo de encuentro buscas y coordinaremos los detalles de la reserva contigo. Así podrás consultar disponibilidad y resolver tus preguntas antes de confirmar.",
      items: [
        "Escribe indicando si te interesa una clase o una reunión.",
        "Consulta disponibilidad y detalles directamente.",
        "Confirma tu reserva cuando tengas toda la información.",
      ],
    },
  ],
  action: "¿Quieres reservar o consultar disponibilidad? Hablemos.",
};

export default function Clases() {
  return <ServicioDetalle servicio={SERVICIO} />;
}
