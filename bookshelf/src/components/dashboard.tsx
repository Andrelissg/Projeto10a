"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Book } from "@/types";
import { mockBooks } from "@/data/mock-books";

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);

  // Simular carregamento de dados
  useEffect(() => {
    // Em uma aplicação real, isso viria de uma API ou banco de dados
    setBooks(mockBooks);
  }, []);

  // Calcular estatísticas
  const totalBooks = books.length;
  const readingBooks = books.filter((book) => book.status === "LENDO").length;
  const finishedBooks = books.filter((book) => book.status === "LIDO").length;
  const totalPagesRead = books
    .filter((book) => book.status === "LIDO")
    .reduce((sum, book) => sum + (book.pages || 0), 0);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <Link
          href="/add-book"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Adicionar Livro
        </Link>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-700">Total de Livros</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalBooks}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-700">
            Lendo Atualmente
          </h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {readingBooks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-700">
            Livros Finalizados
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {finishedBooks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-700">Páginas Lidas</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {totalPagesRead}
          </p>
        </div>
      </div>

      {/* Navegação Rápida */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Navegação Rápida
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/library"
            className="bg-blue-50 text-blue-700 p-4 rounded-md hover:bg-blue-100 transition-colors text-center"
          >
            <h3 className="font-medium">Ver Biblioteca Completa</h3>
            <p className="text-sm text-blue-600 mt-1">
              {totalBooks} livros catalogados
            </p>
          </Link>

          <Link
            href="/add-book"
            className="bg-green-50 text-green-700 p-4 rounded-md hover:bg-green-100 transition-colors text-center"
          >
            <h3 className="font-medium">Adicionar Novo Livro</h3>
            <p className="text-sm text-green-600 mt-1">Expandir sua coleção</p>
          </Link>

          <Link
            href="/library?status=LENDO"
            className="bg-yellow-50 text-yellow-700 p-4 rounded-md hover:bg-yellow-100 transition-colors text-center"
          >
            <h3 className="font-medium">Continuar Leitura</h3>
            <p className="text-sm text-yellow-600 mt-1">
              {readingBooks} livros em progresso
            </p>
          </Link>
        </div>
      </div>

      {/* Livros Recentes */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Livros Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 3).map((book) => (
            <div
              key={book.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={book.cover || "/book-placeholder.png"}
                  alt={book.title}
                  className="w-16 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{book.title}</h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <div className="mt-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        book.status === "LIDO"
                          ? "bg-green-100 text-green-800"
                          : book.status === "LENDO"
                          ? "bg-yellow-100 text-yellow-800"
                          : book.status === "QUERO_LER"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {book.status === "LIDO"
                        ? "Lido"
                        : book.status === "LENDO"
                        ? "Lendo"
                        : book.status === "QUERO_LER"
                        ? "Quero Ler"
                        : book.status === "PAUSADO"
                        ? "Pausado"
                        : "Abandonado"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
