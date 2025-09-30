const mockBooks = [
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
      "Um clássico da literatura brasileira que explora ciúme e traição através dos olhos de Bentinho, que relembra seu relacionamento com Capitu.",
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
      "Romance distópico que retrata um regime totalitário onde a vigilância constante e a manipulação da verdade são armas de controle social.",
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
      "A aventura de Bilbo Bolseiro, um hobbit tranquilo que é arrastado para uma jornada épica para recuperar um tesouro guardado pelo dragão Smaug.",
    currentPage: 150,
  },
];

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        📖 Minha Biblioteca
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md border p-6"
          >
            <div className="flex items-start space-x-4">
              <img
                src={book.cover}
                alt={book.title}
                className="w-16 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm">por {book.author}</p>
                <p className="text-gray-500 text-xs">
                  {book.year} • {book.pages} páginas
                </p>

                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {"★".repeat(book.rating)}
                    {"☆".repeat(5 - book.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {book.rating}/5
                  </span>
                </div>

                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                    book.status === "LIDO"
                      ? "bg-green-100 text-green-800"
                      : book.status === "LENDO"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {book.status}
                </span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <a
                href={`/books/${book.id}`}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm text-center font-medium"
              >
                Ver Detalhes
              </a>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded text-sm">
                ✏️ Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
