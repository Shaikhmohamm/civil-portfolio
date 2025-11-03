"use client";

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 via-white to-gray-100 px-4"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
        Shaikh Mohammed Zaid
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
        Civil Engineer with 6+ years of experience in <strong>building construction</strong>,
        <strong> site execution</strong>, and <strong>project management</strong>. Dedicated to
        delivering quality, precision, and innovation in every project.
      </p>
      <button
        onClick={handleScroll}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        View My Work
      </button>
    </section>
  );
}
