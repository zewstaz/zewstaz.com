import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-geist-sans)] px-6 sm:px-20 py-16 grid place-items-center">
      <div className="max-w-4xl text-center space-y-8">
        {/* Logo or Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Welcome to <span className="text-indigo-500">Zewstaz</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-400">
          Innovating the future, one pixel at a time. Crafting powerful digital experiences.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
            Get Started
          </button>
          <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-600 text-sm text-center w-full">
        &copy; {new Date().getFullYear()} Zewstaz. All rights reserved.
      </footer>
    </div>
  );
}
