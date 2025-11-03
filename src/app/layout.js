import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zaid Shaikh | Civil Engineer Portfolio",
  description: "Civil Engineer with 6+ years of building construction experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth bg-gray-50 text-gray-900">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
