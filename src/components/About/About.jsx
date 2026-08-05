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
    value1:"First Class with Distinction",
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left */}

                <motion.div
                initial={{ opacity: 0, x: -40 }}

    whileInView={{ opacity: 1, x: 0 }}

    viewport={{ once: true }}

    transition={{ duration: 0.6 }}>

                    <div className="space-y-5 border-l-2 sm:border-l-4 border-blue-500 pl-4 sm:pl-6">

 <p className="text-gray-300 leading-8 sm:leading-9 text-base sm:text-lg">
  I'm Aatmaj Deshpande, a recent B.E. Information Technology graduate
  with Honours in Artificial Intelligence & Machine Learning. Through
  internships, research, and real-world projects, I've gained practical
  experience in backend development, AI-powered applications, Android
  development, and Natural Language Processing.
</p>

<p className="text-gray-400 leading-8 sm:leading-9 text-sm sm:text-base">
  I enjoy building reliable backend systems using Java, Spring Boot,
  Python, and modern web technologies while applying AI and machine
  learning to solve real-world problems. I'm passionate about writing
  clean, maintainable software and continuously improving as a developer.
</p>

<p className="text-gray-400 leading-8 sm:leading-9 text-sm sm:text-base">
  I'm currently seeking Software Engineer opportunities where I can
  contribute to impactful products, collaborate with experienced teams,
  and continue growing in backend development, cloud technologies, and
  AI-driven software engineering.
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
        p-5 sm:p-8
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
                py-4 sm:py-5
                border-b
                border-gray-800
                last:border-b-0
                transition-colors
                duration-300
            "
        >
            <div className="flex items-center gap-3">
                <Icon className="text-blue-400 text-lg sm:text-xl" />

                <h3 className="text-blue-400 font-semibold">
                    {fact.title}
                </h3>
            </div>

            <p className="text-gray-300 mt-2 sm:mt-3 leading-6 sm:leading-7 text-sm sm:text-base">
                {fact.value}
            </p>
            <p className="text-gray-300 mt-2 sm:mt-3 leading-6 sm:leading-7 text-sm sm:text-base" style={{ fontStyle: 'italic' }}>
                {fact.value1}
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
