// Carga las recetas desde la carpeta src/recetas/.
// Cada receta es un archivo .md; su foto (opcional) es un archivo con el
// mismo nombre y extensión de imagen. Ver src/recetas/LEEME.md.

const FILES = import.meta.glob("./recetas/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const IMAGES = import.meta.glob("./recetas/*.{avif,jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function fileSlug(path) {
  return path.split("/").pop().replace(/\.[^.]+$/, "");
}

function parseRecipe(path, raw) {
  const slug = fileSlug(path);
  const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    console.warn(`Receta "${slug}.md": falta la cabecera entre líneas ---.`);
    return null;
  }

  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) meta[line.slice(0, idx).trim().toLowerCase()] = line.slice(idx + 1).trim();
  }

  // Divide el cuerpo en secciones "## Título".
  const sections = {};
  let current = null;
  for (const line of match[2].split("\n")) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      current = heading[1]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      sections[current] = [];
    } else if (current && line.trim()) {
      sections[current].push(line.trim().replace(/^(?:[-*+]|\d+[.)])\s+/, ""));
    }
  }

  const imagePath = Object.keys(IMAGES).find((p) => fileSlug(p) === slug);

  return {
    slug,
    title: meta.titulo || slug,
    description: meta.descripcion || "",
    instagramUrl: meta.instagram || "",
    order: Number(meta.orden) || 0,
    image: imagePath ? IMAGES[imagePath] : null,
    ingredients: sections.ingredientes ?? [],
    preparation: sections.preparacion ?? [],
  };
}

const RECIPES = Object.entries(FILES)
  .map(([path, raw]) => parseRecipe(path, raw))
  .filter(Boolean)
  // Primero las que tienen "orden"; el resto, alfabéticas.
  .sort((a, b) => (a.order || 1e9) - (b.order || 1e9) || a.title.localeCompare(b.title, "es"));

export default RECIPES;
