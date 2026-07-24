import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaLocationDot,
    FaLightbulb
} from "react-icons/fa6";
function About() {
    const quickFacts = [
  {
    title: "Education",
    value: "B.E Information Technology (Honours in AI&ML) - SPPU (2026)",
    icon: FaGraduationCap
    
  },
  {
    title: "Location",
    value: "Pune, India",
    icon: FaLocationDot
  },
  {
    title: "Interests",
    value: "Backend Development, Cloud Computing, AI",
    icon: FaLightbulb
  }
];
    return (

        <Section id="about" className="bg-gray-950/40">

            <SectionHeading
                subtitle="Get To Know Me"
                title="About Me"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left */}

                <motion.div
                initial={{ opacity: 0, x: -40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.6 }}>

                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">

  <p className="text-gray-300 leading-9 text-lg">
    I'm Aatmaj Deshpande, an Information Technology graduate with a
    passion for designing scalable backend systems and modern web
    applications.
  </p>

  <p className="text-gray-400 leading-9">
    My primary focus is backend development using Java and Spring Boot,
    while also building intuitive frontends with React. I enjoy solving
    challenging engineering problems and writing clean, maintainable
    software.
  </p>

  <p className="text-gray-400 leading-9">
    Outside of coding, I enjoy exploring distributed systems, cloud
    technologies, artificial intelligence, and continuously learning new
    tools that help me become a better software engineer.
  </p>

</div>

                </motion.div>

                {/* Right */}

                <div>

                   

<motion.div
    initial={{
        opacity: 0,
        y: 25,
        scale: 0.98,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
    }}
    viewport={{
        once: true,
        amount: 0.3,
    }}
    transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
    }}
    whileHover={{
        y: -4,
    }}
    className="
    transform-gpu

will-change-transform
        bg-gray-900/60
        backdrop-blur-md
        border border-gray-800
        rounded-3xl
        p-8
        shadow-xl

        transition-all
        duration-300
        ease-out

        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10

        will-change-transform
    "
>
    {quickFacts.map((fact) => {
    const Icon = fact.icon;

    return (
        <div
            key={fact.title}
            className="
                py-5
                border-b
                border-gray-800
                last:border-b-0
                transition-colors
                duration-300
            "
        >
            <div className="flex items-center gap-3">
                <Icon className="text-blue-400 text-xl" />

                <h3 className="text-blue-400 font-semibold">
                    {fact.title}
                </h3>
            </div>

            <p className="text-gray-300 mt-3 leading-7">
                {fact.value}
            </p>
        </div>
    );
})}
</motion.div>

                </div>

            </div>

        </Section>

    );
}

export default About;