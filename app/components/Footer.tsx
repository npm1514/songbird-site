"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright UXPERT Ltd.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 hover:text-gray-300 transition-colors"
        >
          Scroll To Top
        </button>

        <div className="mt-4 md:mt-0">
          <span className="mr-4">follow us</span>
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
}
