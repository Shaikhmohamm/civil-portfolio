export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm md:text-base mb-3">
          © {new Date().getFullYear()} <span className="font-semibold text-amber-500">Shaikh Mohammed Zaid</span> — Civil Engineer Portfolio
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="mailto:zaidshaikh@example.com"
            className="hover:text-amber-500 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
