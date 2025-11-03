export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Let’s collaborate or discuss your next project.  
        I’m always open to new opportunities in construction, design, and project management.
      </p>

      {/* Contact Details */}
      <div className="space-y-3 text-gray-700 text-lg">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:zaidshaikh@example.com"
            className="text-amber-600 hover:underline"
          >
            zaidshaikh@example.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+919876543210"
            className="text-amber-600 hover:underline"
          >
            +91 98765 43210
          </a>
        </p>
        <p>
          <strong>Location:</strong> Mumbai, India
        </p>
      </div>

      {/* Button */}
      <div className="mt-10">
        <a
          href="mailto:zaidshaikh@example.com"
          className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Send a Message
        </a>
      </div>

      {/* Footer line */}
      <div className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Shaikh Mohammed Zaid. All rights reserved.
      </div>
    </section>
  );
}
