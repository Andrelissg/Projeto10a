export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <h1 className="text-xl font-bold text-gray-800">BookShelf</h1>
          </div>

          <nav className="flex space-x-6">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Dashboard
            </a>
            <a
              href="/books"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Biblioteca
            </a>
            <a
              href="/add-book"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Adicionar Livro
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
