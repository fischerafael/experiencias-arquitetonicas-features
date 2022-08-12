import type { NextApiRequest, NextApiResponse } from "next";

const authors = {
  a: "Pallasmaa 2012",
};
const geometric = ["forma", "volume", "tamanho"];
const time = ["tempo", "clima"];
const materials = ["cor", "textura", "temperatura", "cheiro"];
const color = ["cor"];
const light = ["iluminação", "aberturas"];
const sounds = ["sons", "ruídos"];
const surroundings = ["visuais", "entorno"];
const smells = ["aromas", "cheiros", "odores"];
const touch = ["textura", "temperatura"];
const temperature = ["temperatura"];
const texture = ["textura"];
const movement = ["movimento"];

const features = {
  "pallasmaa.2012": [
    {
      name: "espaço",
      objectives: [...geometric],
    },
    {
      name: "tempo",
      objectives: [...time],
    },
    {
      name: "matéria",
      objectives: [...materials],
    },
    {
      name: "gravidade",
      objectives: [...materials, geometric],
    },
    {
      name: "luz",
      objectives: [...light],
    },
    {
      name: "silêncio",
      objectives: [...sounds],
    },
    {
      name: "paisagem",
      objectives: [...surroundings],
    },
  ],
  "pallasmaa.2006": [
    {
      name: "perspectiva",
      objectives: [...geometric],
    },
    {
      name: "cor",
      objectives: [...color],
    },
    {
      name: "luz e sombra",
      objectives: [...light],
    },
    {
      name: "espacialidade noturna",
      objectives: [...light],
    },
    {
      name: "tempo",
      objectives: [...time],
    },
    {
      name: "água",
      objectives: [...sounds, ...movement],
    },
    {
      name: "som",
      objectives: [...sounds],
    },
    {
      name: "detalhe",
      objectives: [...materials],
    },
    {
      name: "proporção e escala",
      objectives: [...geometric],
    },
    {
      name: "circustância do local",
      objectives: [...surroundings],
    },
  ],
  "gibson.2006": [
    {
      name: "aromas",
      objectives: [...smells],
    },
    {
      name: "cheiros",
      objectives: [...smells],
    },
    {
      name: "tato",
      objectives: [...touch],
    },
    {
      name: "temperatura",
      objectives: [...temperature],
    },
    {
      name: "umidade",
      objectives: [...temperature],
    },
    {
      name: "equilíbrio",
      objectives: [...geometric],
    },
    {
      name: "sons",
      objectives: [...sounds],
    },
    {
      name: "cores",
      objectives: [...color],
    },
    {
      name: "texturas",
      objectives: [...texture],
    },
    {
      name: "formas",
      objectives: [...geometric],
    },
  ],
  "bula.2015": [
    {
      name: "espaço e tempo",
      objectives: [...geometric, ...time],
    },
    {
      name: "material e imaterial",
      objectives: [...materials, ...movement],
    },
  ],
  "guilhermino.2015": [
    {
      name: "vículo com o lugar",
      objectives: [...surroundings],
    },
    {
      name: "tectônica",
      objectives: [...materials, ...geometric],
    },
    {
      name: "percurso",
      objectives: [...movement],
    },
    {
      name: "iluminação",
      objectives: [...light],
    },
    {
      name: "contrastes",
      objectives: [...light],
    },
    {
      name: "paisagem",
      objectives: [...surroundings],
    },
    {
      name: "materialidade",
      objectives: [...materials],
    },
    {
      name: "ritmo e som",
      objectives: [...sounds],
    },
  ],
  "droog.2010": [
    {
      name: "forma",
      objectives: [...geometric],
    },
    {
      name: "massa e vazio",
      objectives: [...geometric],
    },
    {
      name: "expressão da forma",
      objectives: [...materials],
    },
    {
      name: "movimento",
      objectives: [...movement],
    },
  ],
  "ambiência.2010": [
    {
      name: "morfologia",
      objectives: [...geometric],
    },
    {
      name: "luz",
      objectives: [...light],
    },
    {
      name: "cheiro",
      objectives: [...smells],
    },
    {
      name: "som",
      objectives: [...sounds],
    },
    {
      name: "sinestesia",
      objectives: [...geometric, ...surroundings],
    },
    {
      name: "cor",
      objectives: [...color],
    },
    {
      name: "áreas externas",
      objectives: [...surroundings],
    },
  ],
  "kotler.1974": [
    {
      name: "cor",
      objectives: [...color],
    },
    {
      name: "brilho",
      objectives: [...materials],
    },
    {
      name: "tamanho",
      objectives: [...geometric],
    },
    {
      name: "formas",
      objectives: [...geometric],
    },
    {
      name: "volume",
      objectives: [...geometric],
    },
    {
      name: "tom",
      objectives: [...sounds],
    },
    {
      name: "odor",
      objectives: [...smells],
    },
    {
      name: "frescor",
      objectives: [...smells],
    },
    {
      name: "maciez",
      objectives: [...texture],
    },
    {
      name: "lisura",
      objectives: [...texture],
    },
    {
      name: "temperatura",
      objectives: [...materials],
    },
  ],
  "zumthor.2006": [
    {
      name: "o corpo da arquitetura",
      objectives: [...geometric, ...materials],
    },
    {
      name: "compatibilidade dos materiais",
      objectives: [...materials],
    },
    {
      name: "som do espaço",
      objectives: [...sounds],
    },
    {
      name: "temperatura do espaço",
      objectives: [...temperature],
    },
    {
      name: "objetos do entorno",
      objectives: [...surroundings],
    },
    {
      name: "entre a composição e a sedução",
      objectives: [...surroundings, ...materials],
    },
    {
      name: "tensão entre interior e exterior",
      objectives: [...surroundings, ...movement],
    },
    {
      name: "níveis de intimidade",
      objectives: [...geometric],
    },
    {
      name: "a luz das coisas",
      objectives: [...light],
    },
    {
      name: "arquitetura como entorno",
      objectives: [...surroundings],
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
