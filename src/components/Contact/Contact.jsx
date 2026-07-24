import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import resume from "/Users/aatmajdeshpande/portfolio/personal-portfolio/src/assets/resume/resume.pdf";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaDownload,
  FaChevronRight,
} from "react-icons/fa";

function Contact() {
  const contactLinks = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "aatmajdeshpande@gmail.com",
      href: "mailto:aatmajdeshpande@gmail.com",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/aatmaj-deshpande",
      href: "https://linkedin.com/in/aatmaj-deshpande",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/aatmajd",
      href: "https://github.com/aatmajd",
    },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        subtitle="Let's Connect"
        title="Get In Touch"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-gray-400 text-lg leading-8">
          I'm always interested in discussing software development,
          AI, backend engineering, Android development, or exciting
          opportunities. Feel free to reach out!
        </p>

        <div className="mt-12 space-y-5">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
  key={item.title}
  href={item.href}
  target={item.title !== "Email" ? "_blank" : undefined}
  rel={item.title !== "Email" ? "noopener noreferrer" : undefined}
  className="
    group
    flex
    items-center
    justify-between
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    p-5
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-blue-400/40
    hover:bg-blue-500/10
  "
>
  <div className="flex items-center gap-5">
    <div
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-blue-500/10
        text-xl
        text-blue-400
      "
    >
      <Icon />
    </div>

    <div className="text-left">
      <h3 className="font-semibold text-white">
        {item.title}
      </h3>

      <p className="text-gray-400">
        {item.value}
      </p>
    </div>
  </div>

  <FaChevronRight
    className="
      text-gray-500
      transition-all
      duration-300
      group-hover:translate-x-2
      group-hover:text-blue-400
    "
  />
</a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="mailto:your.email@example.com"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-500
              px-6
              py-3
              text-white
              font-medium
              transition
              hover:bg-blue-600
            "
          >
            <FaPaperPlane />
            Email Me
          </a>

          <a
            href={resume}
            download="Aatmaj_Deshpande_Resume.pdf"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-white
              font-medium
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
            "
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

export default Contact;