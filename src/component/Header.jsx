import React from "react";

function Header() {
  return (
    <header className="mb-10 flex flex-col items-center justify-center gap-2">
      <h1 className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
        Gallery
      </h1>
      <p className="text-sm font-light text-gray-400 md:text-base">
        Curated visual inspiration
      </p>
    </header>
  );
}

export default Header;
