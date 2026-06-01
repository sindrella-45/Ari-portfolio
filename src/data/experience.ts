export interface ExperienceItem {
  id: number;
  role: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
  type: "experience" | "education";
  accentColor?: "teal" | "gold";
  icon?: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 1,
    role: "AI Application Developer",
    org: "Independent / Open Source Projects",
    date: "2024 – Present",
    description:
      "Built and shipped multiple full-stack AI applications integrating LLM orchestration, RAG pipelines, vector databases, and FastAPI backends. Focused on real-world impact across agriculture, finance, and education verticals.",
    tags: ["LangGraph", "OpenAI API", "RAG", "FastAPI"],
    type: "experience",
    accentColor: "teal",
  },
  {
    id: 2,
    role: "Backend Engineer",
    org: "Freelance Projects",
    date: "2023 – 2024",
    description:
      "Developed full-stack web applications using Django and REST APIs, delivering business websites and admin systems for local businesses including Mayondo Wood & Furniture.",
    tags: ["Django", "REST APIs", "Python"],
    type: "experience",
    accentColor: "gold",
  },
];

export const educationItems: ExperienceItem[] = [
  {
    id: 3,
    role: "Software & AI Engineering",
    org: "Turing College, Lithuania",
    date: "2025 – 2026",
    description:
      "Completing structured curriculum in AI Engineering: LLM development, agent orchestration, RAG systems, evaluation frameworks, and production deployment.",
    tags: ["LLM", "AI Agents", "RAG", "FastAPI"],
    type: "education",
    icon: "🎓",
  },
  {
    id: 4,
    role: "Certificate in Python Development",
    org: "Refactory Academy, Uganda",
    date: "2025",
    description:
      "Foundational to advanced Python programming, software development principles, and practical project-based learning.",
    tags: ["Python", "Software Development"],
    type: "education",
    icon: "📜",
  },
];