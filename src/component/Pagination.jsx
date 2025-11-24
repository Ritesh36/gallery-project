import React from "react";

function Pagination({ page, setPage, setImages }) {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      setImages([]);
    }
  };

  const handleNext = () => {
    setImages([]);
    setPage(page + 1);
  };

  return (
    <footer className="mt-12 flex items-center justify-center gap-8">
      <button
        disabled={page === 1}
        className={`rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
          page === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handlePrev}
      >
        ← Previous
      </button>
      <span className="font-mono text-lg text-amber-400/80">Page {page}</span>
      <button
        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
        onClick={handleNext}
      >
        Next →
      </button>
    </footer>
  );
}

export default Pagination;
