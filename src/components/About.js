"use client";
export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/479/097/large_2x/discussion-of-work-by-a-civil-engineer-with-an-architect-at-a-construction-site-against-the-backdrop-of-a-tower-crane-and-a-high-rise-building-under-construction-free-photo.jpg"
            alt="Zaid on site"
            className="w-full rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            I’m <strong>Shaikh Mohammed Zaid</strong>, a passionate{" "}
            <strong>Civil Engineer</strong> with over 6 years of hands-on
            experience in <strong>building construction</strong>,{" "}
            <strong>repairs</strong>, and <strong>project supervision</strong>.
            I’ve successfully handled projects like <em>Sakar Swapna</em>,{" "}
            <em>Serenity Heights</em>, and <em>Parshwa Darshan</em> — ensuring
            quality, safety, and precision at every stage.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            My expertise lies in structural coordination, site execution,
            quality control, and managing on-site challenges with practical,
            efficient solutions. I believe in engineering that blends
            innovation with reliability — creating spaces that last.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
}
