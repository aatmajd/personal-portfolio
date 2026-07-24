import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";

function Footer() {
  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/aatmajd",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/aatmaj-deshpande",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:aatmajdeshpande@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-2xl font-bold text-white">
            AATMAJ DESHPANDE
          </h2>

          <p className="mt-3 max-w-xl text-gray-400 leading-7">
            Building intelligent software with AI,
            backend engineering, and Android development.
          </p>

          <div className="mt-8 flex items-center gap-6">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel={item.label !== "Email"
                    ? "noopener noreferrer"
                    : undefined}
                  aria-label={item.label}
                  className="
                    text-2xl
                    text-gray-400
                    transition-all
                    duration-300
                    hover:text-blue-400
                    hover:-translate-y-1
                  "
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="mt-10 h-px w-full max-w-md bg-white/10" />

          <p className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Aatmaj Deshpande.
            All rights reserved.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <span>Built with</span>

            <FaReact className="text-cyan-400" />
            <span>React</span>

            <span>•</span>

            <RiTailwindCssFill className="text-sky-400" />
            <span>Tailwind CSS</span>

            <span>•</span>

            <SiFramer className="text-pink-400" />
            <span>Framer Motion</span>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;