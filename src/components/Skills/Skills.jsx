import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      icon: FaServer,
      skills: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      icon: FaDatabase,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
      ],
    },
    {
      title: "Tools",
      icon: FaTools,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Linux",
        "VS Code",
      ],
    },
  ];

  return (
    <Section id="skills">
      <SectionHeading
        subtitle="Technologies I Use"
        title="Skills"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </Section>
  );
}

export default Skills;