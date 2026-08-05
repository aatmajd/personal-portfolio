import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

function Skills() {
    const skillCategories = [
  {
    title: "Programming",
    icon: FaCode,
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "C/C++",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend & APIs",
    icon: FaServer,
    skills: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "REST APIs",
      "React",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: FaBrain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: FaDatabase,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Azure",
      "Docker",
      "Grafana",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: FaTools,
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
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
