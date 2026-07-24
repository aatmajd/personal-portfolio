function Navbar() {
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

        <ul className="flex items-center gap-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;