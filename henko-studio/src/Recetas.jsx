import { useEffect, useRef, useState } from "react";
import whoamiPhoto from "./assets/whoami.jpeg";
import InstagramIcon from "./InstagramIcon.jsx";
import RECIPES from "./recetas.js";

function RecipeArtwork({ recipe, className = "" }) {
  const image = recipe.image;

  if (image) {
    return (
      <img
        className={`recipe-artwork ${className}`}
        src={image}
        alt={recipe.title}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`recipe-artwork recipe-artwork-placeholder ${className}`}
      role="img"
      aria-label={`Foto próximamente de ${recipe.title}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="10" width="38" height="28" rx="3" />
        <circle cx="17" cy="20" r="3" />
        <path d="m7 34 11-10 8 7 6-5 9 8" />
      </svg>
      <span>Foto próximamente</span>
    </div>
  );
}

export default function Recetas() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dialogRef = useRef(null);

  const lastTriggerRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedRecipe || !dialog) return undefined;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (dialog.open) dialog.close();
      // Devuelve el foco a la tarjeta que abrió la receta.
      lastTriggerRef.current?.focus();
    };
  }, [selectedRecipe]);

  return (
    <section className="page-section recetas-page" id="recetas">
      <div className="wrap">
        <div className="section-head about-section-head">
          <div>
            <img
              className="whoami-photo"
              src={whoamiPhoto}
              alt="Instructora de Henko Studio practicando pilates"
            />
            <span className="kicker">Recetas</span>
          </div>
          <div>
            <h1 className="display">Lore Patisserie</h1>
            <p className="lede">
              La parte dulce de Henko Studio: recetas propias para acompañar tu
              rutina, dentro y fuera de la esterilla.
            </p>
          </div>
        </div>

        <div className="recipe-grid" aria-label="Recetas">
          {RECIPES.map((recipe) => (
            <button
              className="recipe-card"
              key={recipe.slug}
              type="button"
              aria-label={`Ver receta: ${recipe.title}`}
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setSelectedRecipe(recipe);
              }}
            >
              <RecipeArtwork recipe={recipe} />
              <span className="recipe-card-title">{recipe.title}</span>
            </button>
          ))}
        </div>

        <dialog
          className="recipe-dialog"
          ref={dialogRef}
          aria-labelledby="recipe-dialog-title"
          onCancel={(event) => {
            event.preventDefault();
            setSelectedRecipe(null);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedRecipe(null);
            }
          }}
        >
          {selectedRecipe && (
            <div className="recipe-dialog-layout">
              <RecipeArtwork
                recipe={selectedRecipe}
                className="recipe-dialog-photo"
              />
              <div className="recipe-dialog-content">
                <button
                  className="recipe-dialog-close"
                  type="button"
                  aria-label="Cerrar receta"
                  onClick={() => setSelectedRecipe(null)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <span className="kicker">Lore Patisserie</span>
                <h2 className="display" id="recipe-dialog-title">
                  {selectedRecipe.title}
                </h2>
                <p className="recipe-description">
                  {selectedRecipe.description}
                </p>
                <h3>Ingredientes</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <h3>Preparación</h3>
                <ol>
                  {selectedRecipe.preparation.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {selectedRecipe.instagramUrl && (
                  <a
                    className="btn primary recipe-instagram-link"
                    href={selectedRecipe.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                    Ver en Instagram
                  </a>
                )}
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
