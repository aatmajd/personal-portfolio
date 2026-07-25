import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  // Disable right-click
  const preventContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Disable Ctrl+Click on macOS
  const preventCtrlClick = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Disable common shortcuts
  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    const modifier = e.ctrlKey || e.metaKey;

    if (
      key === "f12" ||
      (modifier && e.shiftKey && ["i", "j", "p"].includes(key)) ||
      (modifier && ["u", "s", "a", "p", "x"].includes(key))
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  document.addEventListener("contextmenu", preventContextMenu);
  document.addEventListener("mousedown", preventCtrlClick, true);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("contextmenu", preventContextMenu);
    document.removeEventListener("mousedown", preventCtrlClick, true);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
</main>
    </>
  );
}

export default App;