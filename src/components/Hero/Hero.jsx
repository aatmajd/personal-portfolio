import HeroPhotoCard from "./HeroPhotoCard";
import HeroTerminal from "./HeroTerminal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-90px)] pt-10 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
         <motion.div
         initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
  <p className="text-blue-400 font-medium text-lg">
    👋 Hello, I'm
  </p>

  <h1 className="text-6xl font-extrabold text-white mt-2 leading-tight">
    AATMAJ <br />
    DESHPANDE
  </h1>

  <h2 className="text-3xl font-semibold text-blue-400 mt-6">
    B.E Information Technology Graduate
  </h2>

  <p className="text-gray-400 mt-6 text-lg leading-8 max-w-xl">
    I build scalable backend systems and modern web applications using
    Java, Spring Boot, React, Python, and cloud technologies.
  </p>

  <div className="flex gap-4 mt-10">
  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
    View Projects
  </button>

  <button className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
    Download Resume
  </button>
  
</div>
<div className="flex items-center gap-6 mt-10">

  <a
    href="https://github.com/aatmajd"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition duration-300 text-2xl"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/aatmaj-deshpande"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#0A66C2] transition duration-300 text-2xl"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:aatmajdeshpande@gmail.com"
    className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
  >
    <FaEnvelope />
  </a>

</div>
</motion.div>

          {/* Right Column */}
          <div className="space-y-6 pt-12">
            <HeroPhotoCard />

            <HeroTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;