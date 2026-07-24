import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "./ExperienceCard";

import {
  FaBrain,
  FaMobileAlt,
  FaCode,
  FaLaptopHouse,
  FaBuilding,
} from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: FaBrain,

      role: "NLP Project Trainee",

      company: "Demos Foundation for Research in Humanities",

      duration: "Jul 2025 – Jun 2026",

      mode: {
  type: "Hybrid",
  icon: FaLaptopHouse,
},

      highlights: [
        "Developed an intelligent news article analysis platform using modern NLP techniques.",
        "Implemented Named Entity Recognition (NER) and entity relationship extraction.",
        "Built a modular pipeline integrating NER, normalization, and summarization.",
        "Improved extraction accuracy using hybrid rule-based and ML approaches.",
      ],
    },

    {
      icon: FaMobileAlt,

      role: "Android Application Development Intern",

      company: "Remote Data Exchange",

      duration: "Feb 2025 – May 2025",

      mode: {
  type: "Hybrid",
  icon: FaLaptopHouse,
},

      highlights: [
        "Developed an Android application for real-time employee tracking.",
        "Implemented secure authentication using WhatsApp OTP and face recognition.",
        "Improved employee tracking reliability and authentication workflow.",
      ],
    },

    {
      icon: FaCode,

      role: "Java WAD Intern",

      company: "Krios Info Solutions Pvt. Ltd.",

      duration: "Dec 2024 – Jan 2025",

      mode: {
  type: "On-site",
  icon: FaBuilding,
},

      highlights: [
        "Developed backend services for M-Krishi, a web platform for an Assam-based NGO.",
        "Led backend development using Java and Spring Boot.",
        "Integrated REST APIs with frontend components in a four-member team.",
      ],
    },
  ];

  return (
    <Section id="experience">
      <SectionHeading
        subtitle="Where I've Worked"
        title="Experience"
      />

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            {...experience}
          />
        ))}
      </div>
    </Section>
  );
}

export default Experience;