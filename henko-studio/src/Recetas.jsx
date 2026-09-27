export default function Recetas() {
  return (
    <section className="page-section recetas-page" id="recetas">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Recetas</span>
          </div>
          <div>
            <h1 className="display">This is Floral</h1>
            <p className="lede">
              La parte dulce de Henko Studio: recetas propias para acompañar tu
              rutina, dentro y fuera de la esterilla.
            </p>
          </div>
        </div>

        <div className="floral-panel">
          <div className="floral-badge" aria-label="This is Floral">
            Floral
          </div>
          <div>
            <span className="kicker">By the instructor</span>
            <h2>Recetas para cuidarte también en la cocina</h2>
            <p>
              Recetas individuales y packs pensados para acompañar tu energía
              diaria. Algunas son gratuitas y otras forman parte de packs de
              pago, siempre con la misma idea detrás: comer con cuidado, sin
              complicarte.
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
  );
}