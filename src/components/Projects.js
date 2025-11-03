export default function Projects() {
  const projects = [
    {
      title: "Residential Tower G+17",
      desc: "Supervised structural works including shuttering, reinforcement & concreting, ensuring top quality and timely delivery.",
      location: "Pune, India",
      image:
        "https://wallpaperset.com/w/full/a/d/c/226077.jpg",
    },
    {
      title: "Commercial Complex",
      desc: "Handled QA/QC operations and inspections throughout project execution, ensuring safety and quality compliance at all stages.",
      location: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Structural Repair & Restoration",
      desc: "Led repair work on RCC members and waterproofing systems, extending building life while maintaining functionality and aesthetics.",
      location: "Thane, India",
      image:
        "https://img.freepik.com/fotos-premium/tecnologia-civil-moderna-ia-generativa-son-utilizadas-ingenieros-construccion-arquitectos-trabajadores-construccion_28914-7370.jpg?w=2000",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-tight">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed">{p.desc}</p>
                <p className="text-sm text-amber-600 font-medium">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
