"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Book } from "@/types";
import { mockBooks } from "@/data/mock-books";

export default function Library() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(mockBooks);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Biblioteca</h1>
        <Link
          href="/add-book"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Adicionar Livro
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600">
          Funcionalidade de busca e filtros será implementada na próxima etapa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={book.cover || "/book-placeholder.png"}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600">{book.author}</p>

              <div className="flex items-center justify-between mt-2">
                {book.year && (
                  <span className="text-sm text-gray-500">{book.year}</span>
                )}
                {book.genre && (
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                    {book.genre}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <Link
                  href={`/book/${book.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
