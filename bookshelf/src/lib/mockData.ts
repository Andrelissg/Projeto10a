import { Book } from "@/types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    genre: "Literatura Brasileira",
    year: 1899,
    pages: 256,
    rating: 5,
    status: "LIDO",
    cover: "https://m.media-amazon.com/images/I/41QR2Q6N8RL._SY445_SX342_.jpg",
    synopsis:
      "A obra narra a história de Bentinho, um homem que relembra sua vida e seu relacionamento com Capitu, sua amiga de infância que se torna sua esposa. O livro é famoso por explorar temas como ciúme, traição e a ambiguidade entre realidade e percepção.",
    currentPage: 256,
    notes:
      "Clássico absoluto da literatura brasileira. O final sempre gera discussões!",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    genre: "Ficção Científica",
    year: 1949,
    pages: 328,
    rating: 5,
    status: "LIDO",
    cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL._SY522_.jpg",
    synopsis:
      "Em um mundo dominado pelo totalitarismo, a vigilância constante e a manipulação da verdade, Winston Smith luta para manter sua humanidade e individualidade em uma sociedade onde o pensamento independente é crime.",
    currentPage: 328,
  },
  {
    id: "3",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasia",
    year: 1937,
    pages: 310,
    rating: 4,
    status: "LENDO",
    cover: "https://m.media-amazon.com/images/I/710+HcoP38L._SY522_.jpg",
    synopsis:
      "Bilbo Bolseiro, um hobbit tranquilo, é arrastado para uma aventura épica por Gandalf, o mago, e um grupo de anões. Sua jornada os leva à Terra Solitária, onde devem recuperar um tesouro guardado pelo dragão Smaug.",
    currentPage: 150,
    notes: "Leitura leve e agradável, perfeita para relaxar.",
  },
  {
    id: "4",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    genre: "Ficção",
    year: 1943,
    pages: 96,
    rating: 5,
    status: "QUERO_LER",
    cover: "https://m.media-amazon.com/images/I/81H+2gGijUL._SY522_.jpg",
    synopsis:
      "Um piloto perdido no deserto do Saara encontra um pequeno príncipe que viaja de planeta em planeta. Através de suas conversas, o livro explora temas profundos sobre amor, amizade e a essência da vida.",
    currentPage: 0,
  },
  {
    id: "5",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    genre: "Fantasia",
    year: 1997,
    pages: 264,
    rating: 5,
    status: "LIDO",
    cover: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._SY522_.jpg",
    synopsis:
      "Harry Potter descobre aos 11 anos que é um bruxo e foi aceito na Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz amigos, aprende magia e descobre segredos sobre seu passado enquanto enfrenta perigos misteriosos.",
    currentPage: 264,
    notes: "Releitura anual obrigatória!",
  },
  {
    id: "6",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programação",
    year: 2008,
    pages: 464,
    rating: 4,
    status: "LENDO",
    cover:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    synopsis:
      "Um guia essencial para desenvolvedores que desejam escrever código limpo, legível e sustentável. O livro aborda princípios, padrões e práticas para criar software de qualidade.",
    currentPage: 120,
    notes: "Leitura técnica mas muito importante para programadores.",
  },
];

// Gêneros disponíveis para usar nos filtros
export const availableGenres = [
  "Literatura Brasileira",
  "Ficção Científica",
  "Fantasia",
  "Ficção",
  "Romance",
  "Programação",
  "Tecnologia",
  "Biografia",
  "História",
  "Autoajuda",
  "Psicologia",
  "Filosofia",
  "Poesia",
];

// Funções simuladas para o CRUD (usando dados mockados)
export const getBooks = async (): Promise<Book[]> => {
  // Simula delay de API
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBooks), 500);
  });
};

export const getBook = async (id: string): Promise<Book | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBooks.find((book) => book.id === id));
    }, 300);
  });
};
