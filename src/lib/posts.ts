export const posts = [
  {
    to: "/articulos/tipografia-y-lectura",
    title: "Tipografía que invita a leer",
    description:
      "Cómo el tipo de letra, el espaciado y el ritmo del texto cambian por completo la experiencia de lectura.",
    category: "Tipografía",
    date: "12 de noviembre de 2026",
    readingTime: "6 min de lectura",
  },
  {
    to: "/articulos/diseno-para-todos",
    title: "Diseñar para todas las personas",
    description:
      "Pequeñas decisiones de diseño que hacen que una interfaz sea más cómoda y comprensible para todo el mundo.",
    category: "Diseño inclusivo",
    date: "18 de noviembre de 2026",
    readingTime: "8 min de lectura",
  },
] as const

export type Post = (typeof posts)[number]
