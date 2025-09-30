export default function BookDetailPage({ params }: { params: { id: string } }) {
  const books = [
    {
      id: "1",
      title: "Dom Casmurro",
      author: "Machado de Assis",
      genre: "Literatura Brasileira",
      year: 1899,
      pages: 256,
      rating: 5,
      status: "LIDO",
      cover:
        "https://m.media-amazon.com/images/I/41QR2Q6N8RL._SY445_SX342_.jpg",
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
        "Romance distópico sobre um regime totalitário onde a vigilância constante controla a sociedade.",
    },
  ];

  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Livro não encontrado
        </h1>
        <a
          href="/books"
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          ← Voltar para Biblioteca
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <a
        href="/books"
        className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
      >
        ← Voltar para Biblioteca
      </a>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Capa do Livro */}
          <div className="md:w-1/3">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Informações */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">por {book.author}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-500">Ano</div>
                <div className="font-medium">{book.year}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Páginas</div>
                <div className="font-medium">{book.pages}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Gênero</div>
                <div className="font-medium">{book.genre}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="font-medium text-green-600">{book.status}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex text-yellow-400 text-xl mb-2">
                {"★".repeat(book.rating)}
                {"☆".repeat(5 - book.rating)}
              </div>
              <span className="text-lg font-medium">
                {book.rating}/5 estrelas
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Sinopse</h3>
              <p className="text-gray-700">{book.synopsis}</p>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                ✏️ Editar Livro
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg">
                🗑️ Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
