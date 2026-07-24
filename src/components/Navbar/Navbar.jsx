import { useEffect, useState,useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
function Navbar() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);

useEffect(() => {
  function handlePointerDown(event) {
    if (
      menuOpen &&
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  }

  document.addEventListener("mousedown", handlePointerDown);
  document.addEventListener("touchstart", handlePointerDown);

  return () => {
    document.removeEventListener("mousedown", handlePointerDown);
    document.removeEventListener("touchstart", handlePointerDown);
  };
}, [menuOpen]);

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

    const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-gray-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

  {/* Logo */}
  <a
    href="#hero"
    className="text-2xl font-bold tracking-wide transition-colors duration-300 hover:text-blue-400"
  >
    AYD
  </a>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-center gap-8">
    {navItems.map((item) => {
      const isActive = activeSection === item.href.slice(1);

      return (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setMenuOpen(false)}
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

  {/* Mobile Menu Button */}
  <motion.button
  onClick={() => setMenuOpen(!menuOpen)}
  whileTap={{ scale: 0.9 }}
  animate={{ rotate: menuOpen ? 180 : 0 }}
  transition={{ duration: 0.25 }}
  className="text-2xl text-white md:hidden"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</motion.button>

</div>
<AnimatePresence>

  {menuOpen && (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0, }}

      transition={{ duration: 0.25 }}

      onClick={() => setMenuOpen(false)}

      className="fixed inset-0 top-[73px] bg-black/40 backdrop-blur-sm md:hidden"

    />

  )}

</AnimatePresence>
<AnimatePresence>
{menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.25 }}
    className="border-t border-white/10 bg-gray-950/95 backdrop-blur-xl md:hidden"
  >
    <motion.ul className="flex flex-col py-4 " variants={menuVariants} initial="hidden" animate="visible">

      {navItems.map((item) => {
        const isActive = activeSection === item.href.slice(1);

        return (
          <motion.li key={item.href} variants={itemVariants}>
            <a
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-8 py-4 transition-colors duration-300 ${
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          </motion.li>
        );
      })}

    </motion.ul>
  </motion.div>
)} </AnimatePresence>
    </nav>
  );
}

export default Navbar;