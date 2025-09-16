import { Book } from "@/types";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Literatura Brasileira",
    year: 1899,
    pages: 256,
    rating: 5,
    synopsis:
      "Um clássico da literatura brasileira que explora ciúme e ambiguidade.",
    cover: "https://covers.openlibrary.org/b/id/12687428-L.jpg",
    status: "LIDO",
    currentPage: 256,
    isbn: "9788572327892",
    notes: "Narrativa fascinante com um final ambíguo",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    genre: "Ficção Científica",
    year: 1949,
    pages: 328,
    rating: 5,
    synopsis: "Uma distopia sobre vigilância governamental e controle social.",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    status: "LENDO",
    currentPage: 150,
    isbn: "9788522106162",
    notes: "Assustadoramente relevante nos dias de hoje",
  },
  // Adicione mais 3 livros seguindo o mesmo padrão
];
