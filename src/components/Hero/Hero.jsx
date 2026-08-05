import HeroPhotoCard from "./HeroPhotoCard";
import HeroTerminal from "./HeroTerminal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import resume from "../../assets/resume/resume.pdf";


function Hero() {
  return (
    <section  id="hero" className="relative overflow-hidden min-h-[110vh] lg:min-h-screen flex items-start lg:items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black pt-20 pb-10 lg:pt-20 lg:pb-0">
      {/* Background Glow */}
<div className="absolute -top-56 -left-32 w-[550px] h-[550px] rounded-full bg-blue-600/35 blur-[140px]" />

<div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/25 blur-[140px]" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
         <motion.div className="order-2 lg:order-1 text-center lg:text-left"
         initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
  <p className="text-blue-400 font-medium text-lg">
    👋 Hello, I'm
  </p>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-2 leading-normal">
    AATMAJ <br />
    DESHPANDE
  </h1>

  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mt-6">
    B.E. Information Technology Graduate
  </h2>

  <p className="text-gray-400 mt-6 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
    Recent Information Technology graduate with hands-on experience in backend development, AI-powered applications, and Android development through internships, research, and real-world projects. Passionate about building scalable software and continuously learning modern technologies.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

    <motion.a
    href="#projects"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}
    className="inline-flex w-full sm:w-auto justify-center items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
    >
    View Projects
   </motion.a>


<motion.a
href={resume}

  download="Aatmaj_Deshpande_Resume.pdf"
    whileHover={{
        scale: 1.05
    }}
    whileTap={{
        scale: 0.95
    }}

  className="inline-flex w-full sm:w-auto justify-center border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
    Download Resume
  </motion.a>
  
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6">

  <a
    href="https://github.com/aatmajd"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Profile"
    className="text-gray-400 hover:text-white transition duration-300 text-2xl"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/aatmaj-deshpande"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Linkedin Profile"
    className="text-gray-400 hover:text-[#0A66C2] transition duration-300 text-2xl"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:aatmajdeshpande@gmail.com"
    aria-label="Email Aatmaj Deshpande"
    className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
  >
    <FaEnvelope />
  </a>

</div>
</motion.div>

          {/* Right Column */}
          <div className="order-1 lg:order-2 space-y-6 pt-0 lg:pt-12">
            <motion.div
            whileHover={{scale: 1.02}}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{

        duration: 0.8,ease: "easeOut",

        delay: 0.2

    }}>
    <HeroPhotoCard />
</motion.div>

            <motion.div

    initial={{ opacity: 0, y: 40 }}

    animate={{ opacity: 1, y: 0 }}

    transition={{

        duration: 0.8,ease: "easeOut",

        delay: 0.4

    }}

>

    <HeroTerminal />
    

</motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
