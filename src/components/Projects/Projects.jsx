import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";

// Import screenshots
import newsImg from "../../assets/projects/news-analysis.png";

import emergencyMobileImg from "../../assets/projects/emergency-mobile.png";
import emergencyWebImg from "../../assets/projects/emergency-web.png";

import employeeImg from "../../assets/projects/employee-tracker.png";
import mkrishiImg from "../../assets/projects/m-krishi.png";

function Projects() {
  const projects = [
    {
      category: "🤖 AI & NLP",

      title:
        "Intelligent News Article Analysis and Entity Relationship Extraction System",

      description:
        "An AI-powered platform that analyzes news articles using modern NLP techniques, extracting entities, relationships, summaries, and metadata while visualizing connections through an interactive knowledge graph.",

      highlights: [
        "Named Entity Recognition",
        "Knowledge Graph Visualization",
        "Transformer-based NLP",
        "Async Processing with Celery & RabbitMQ",
      ],

      technologies: [
        "Python",
        "FastAPI",
        "React",
        "PostgreSQL",
        "spaCy",
        "Celery",
        "RabbitMQ",
        "Gemini API",
      ],

      github: "YOUR_GITHUB_LINK",

      images: [
  {
    src: newsImg,
    label: "Application",
    type: "desktop",
  },
],
    },

    {
      category: "🏥 Healthcare",

      title: "Gesture-Based Emergency Assistance System",

      description:
        "A real-time healthcare assistance platform that detects emergency hand gestures and instantly alerts medical assistants through Firebase Cloud Messaging.",

      highlights: [
        "Real-time Gesture Recognition",
        "Spring Boot REST APIs",
        "Firebase Cloud Messaging",
        "Patient & Device Management",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "Firebase",
        "REST APIs",
        "MySQL",
      ],

      github: "YOUR_GITHUB_LINK",

      images: [
  {
    src: emergencyMobileImg,
    label: "Android App",
    type: "mobile",
  },
  {
    src: emergencyWebImg,
    label: "Web Dashboard",
    type: "desktop",
  },
],
    },

    {
      category: "📱 Android",

      title: "Employee Tracking Application",

      description:
        "An Android application developed for real-time employee tracking with secure authentication using WhatsApp OTP and face recognition.",

      highlights: [
        "Real-time Tracking",
        "WhatsApp OTP Login",
        "Face Recognition",
        "Secure Authentication",
      ],

      technologies: [
        "Java",
        "Android",
        "Firebase",
      ],

      github: "YOUR_GITHUB_LINK",

      images: [
  {
    src: employeeImg,
    label: "Application",
    type: "mobile",
  },
],
    },

    {
      category: "🌱 Enterprise Web",

      title: "M-Krishi",

      description:
        "A web platform developed for an Assam-based NGO, focusing on backend services, REST APIs, and seamless frontend integration.",

      highlights: [
        "Spring Boot Backend",
        "REST API Integration",
        "Team Collaboration",
        "Backend Architecture",
      ],

      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "MySQL",
      ],

      github: "YOUR_GITHUB_LINK",

      images: [
  {
    src: mkrishiImg,
    label: "Web Application",
    type: "desktop",
  },
],
    },
  ];

  return (
    <Section id="projects">
      <SectionHeading
        subtitle="Some Things I've Built"
        title="Projects"
      />

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;