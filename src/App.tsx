import { useState } from "react";
import Logo from "@/components/Logo";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "services":
        return <Services setCurrentPage={setCurrentPage} />;
      case "testimonials":
        return <Testimonials setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(212, 175, 55, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(212, 175, 55, 0.03) 3px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(212, 175, 55, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(212, 175, 55, 0.03) 3px
            )
          `,
          backgroundSize: '60px 60px'
        }} />

        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" fill="none" />
              <path d="M 50 100 L 100 100 L 100 50" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" fill="none" />
              <path d="M 150 50 L 150 100 L 200 100" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill="rgba(212, 175, 55, 0.3)" />
              <circle cx="100" cy="100" r="3" fill="rgba(212, 175, 55, 0.3)" />
              <circle cx="150" cy="50" r="3" fill="rgba(212, 175, 55, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50 animate-pulse" />
      </div>

      <Logo setCurrentPage={setCurrentPage} />

      {renderPage()}

      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} Autonotech. All rights reserved.
      </footer>
    </div>
  );
}
