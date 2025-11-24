import React from "react";

function Card({ el }) {
  return (
    <div className="group relative h-64 w-full overflow-hidden rounded-2xl bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <a
        href={el.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full w-full"
      >
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={el.download_url}
          alt={el.author}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className="translate-y-4 text-lg font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
              {el.author}
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
