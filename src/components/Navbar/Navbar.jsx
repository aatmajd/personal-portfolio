function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">
          AYD
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            Skills
          </li>

          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            Projects
          </li>

          <li className="cursor-pointer hover:text-white transition-colors duration-300">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
