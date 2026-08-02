/**
 * Gallery content for the Playas de Venezuela site.
 *
 * Editorial content (title / description) is Spanish and must be kept
 * verbatim — it is copied from the original 2017 site.
 *
 * `cols` / `rows` are desktop grid spans (12-column masonry grid,
 * 6px auto rows). Tiles in the same visual row share the same row span
 * so the grid packs without holes.
 */

export interface Sitio {
  /** Card title shown over the image and in the lightbox. */
  title: string;
  /** Long description shown in the lightbox. */
  description: string;
  /** Public asset path under /public/img. */
  image: string;
  /** Intrinsic image dimensions, used to prevent layout shift. */
  width: number;
  height: number;
  /** Desktop grid column span (out of 12). */
  cols: number;
  /** Desktop grid row span (6px auto rows). */
  rows: number;
  /** Category used to pick the small icon shown on the tile. */
  tipo: "playa" | "tepuy" | "laguna" | "catarata" | "isla" | "parque";
}

export const sitios: Sitio[] = [
  {
    title: "Playa Cayo de Agua",
    description:
      "Esta increíble playa de una suave arena blanca se encuentra rodeada por el mar Caribe por ambos lados. La playa se encuentra ubicada dentro del Parque Nacional Los Roques y ha sido elegida como la segunda playa más popular de América del Sur, después de la brasileña Playa do Sancho. Este paraíso natural es uno de los mejores lugares de Venezuela y vale la pena conocerlo. Sus distintas tonalidades de azul, atrae a miles de turistas.",
    image: "/img/2.jpg",
    width: 1024,
    height: 680,
    cols: 7,
    rows: 30,
    tipo: "playa",
  },
  {
    title: "Tepuy Sarisariñama",
    description:
      "Este tepuy venezolano se encuentra ubicado en Parque Nacional Jaua Sarisariñama, en el estado de Bolívar. El tepuy posee 2.300 metros de altura y en su sima podemos observar unas formidables cavidades circulares, las cuales representan un gran misterio para la geología hasta hoy en día con un diámetro de 350 metros y una profundidad de igualmente 350 metros.",
    image: "/img/4.jpg",
    width: 1024,
    height: 690,
    cols: 5,
    rows: 30,
    tipo: "tepuy",
  },
  {
    title: "Laguna de Canaima al Atardecer",
    description:
      "Dentro del Parque Nacional de Canaima se encuentra la Laguna de Canaima, un lugar bordeado de playas con palmeras y siete cascadas. Esta laguna se localiza a poca distancia del centro urbano de Canaima. La laguna se caracteriza por la variedad de colores de sus aguas, que van desde las tonalidades rojizas por presencia de minerales hasta azules por la fuerza de la caída de las aguas de sus cascadas.",
    image: "/img/5.jpg",
    width: 1024,
    height: 768,
    cols: 4,
    rows: 24,
    tipo: "laguna",
  },
  {
    title: "Cataratas Kaieteur",
    description:
      "Las cataratas Kaieteur se encuentran ubicadas en el Parque Nacional de Kaieteur, en el territorio Esequibo. Estas cataratas son las más grandes del mundo, incluso superan a las cataratas del Niágara en más de 5 metros. Posee una caída libre de 226 metros desde su salida hasta que toca roca por primera vez, enseguida el agua sigue su curso hacia varias cascadas menores, llegando a alcanzar los 256 metros en total.",
    image: "/img/6.jpg",
    width: 1024,
    height: 768,
    cols: 4,
    rows: 24,
    tipo: "catarata",
  },
  {
    title: "Tepuy Roraima",
    description:
      "El tepuy Roraima es el mayor tepuy o monte del Parque Nacional Canaima, mide 34 kilómetros cuadrados de superficie y alrededor de 2.700 metros de altitud. El pueblo de San Francisco es el punto de partida de los circuitos que suben hasta lo alto. Las travesías duran seis días, deben realizarse con guías y porteadores, y exigen buena forma física.",
    image: "/img/7.jpg",
    width: 1024,
    height: 679,
    cols: 4,
    rows: 24,
    tipo: "tepuy",
  },
  {
    title: "Isla Coche",
    description:
      "Al sur de la isla Margarita se encuentra la isla Coche, en el mar Caribe. una isla árida pero que posee grandes salinas que producen una excelente calidad de sal, siendo ésta y actualmente el turismo las principales actividades económicas de la isla. Su capital es la ciudad de San Pedro de coche. En la isla se pueden practicar diversos deportes acuáticos ya que siempre tiene una agradable brisa ideal para los amantes del windsurf.",
    image: "/img/8.jpg",
    width: 1024,
    height: 768,
    cols: 7,
    rows: 28,
    tipo: "isla",
  },
  {
    title: "Parque Nacional Mochima",
    description:
      "Dentro del Parque Nacional Mochima, parque ubicado entre los estados venezolanos de Sucre y de Anzóategui, se encuentra la turística playa de Arapito. Esta playa, junto con otra gran cantidad de playas que presenta el parque, son ideales para distintos deportes náuticos tales como velerismo y submarinismo gracias a sus cálidas aguas pertenecientes al mar Caribe. Además los turistas pueden visitar una infinidad de islas pertenecientes al parque ya las que se puede acceder desde distintos embarcaderos, ya sea desde Puerto La Cruz, Guanta, Lechería y en Mochima.",
    image: "/img/1.jpg",
    width: 400,
    height: 300,
    cols: 5,
    rows: 28,
    tipo: "parque",
  },
];
