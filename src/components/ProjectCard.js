export default function ProjectCard({ title, location, role, description, image }) {
    return (
      <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {location}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Role:</strong> {role}</p>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  