"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            BookShelf
          </Link>

          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md ${
                pathname === "/"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/library"
              className={`px-3 py-2 rounded-md ${
                pathname === "/library"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Biblioteca
            </Link>
            <Link
              href="/add-book"
              className={`px-3 py-2 rounded-md ${
                pathname === "/add-book"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Adicionar Livro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
