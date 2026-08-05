import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";


function Skills() {
import {
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

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
    title: "Backend",
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
    title: "AI & ML",
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
    title: "Databases",
    icon: FaDatabase,
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: [
      "Azure",
      "Docker",
      "CI/CD",
      "Grafana",
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      "Git",
      "GitHub",
      "Forgejo",
      "GitLab",
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
