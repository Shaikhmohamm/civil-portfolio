import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Residential Tower G+17",
      location: "Pune, India",
      role: "Site Incharge",
      description:
        "Supervised shuttering, reinforcement, concreting, and QA/QC for a high-rise building ensuring structural integrity and adherence to schedule.",
      image: "/images/residential.jpg",
    },
    {
      title: "Commercial Complex",
      location: "Mumbai, India",
      role: "QA/QC Engineer",
      description:
        "Managed material testing, concrete quality, and reinforcement checks ensuring compliance with design specifications.",
      image: "/images/commercial.jpg",
    },
  ];

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects Showcase</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
