export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        📚 BookShelf - Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-blue-600">6</div>
          <div className="text-gray-600">Total de Livros</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-green-600">2</div>
          <div className="text-gray-600">Lendo Atualmente</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-purple-600">3</div>
          <div className="text-gray-600">Livros Finalizados</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-orange-600">894</div>
          <div className="text-gray-600">Páginas Lidas</div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/books"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg"
        >
          📖 Ver Minha Biblioteca Completa
        </a>
      </div>
    </div>
  );
}
