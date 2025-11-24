import React from "react";
import Card from "./Card";

function Gallery({ data }) {
  if (data.length === 0) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <h3 className="animate-pulse text-xl font-light text-gray-400">
          Loading Gallery...
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((el, index) => (
        <Card key={index} el={el} />
      ))}
    </div>
  );
}

export default Gallery;
