import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-gray-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide transition-colors duration-300 hover:text-blue-400"
        >
          AYD
        </a>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative pb-1 font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-gray-300 hover:text-white font-medium"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-blue-400"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;