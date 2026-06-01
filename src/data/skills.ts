export interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  variant: "teal" | "gold" | "blue";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "AI & LLM Engineering",
    icon: "🧠",
    variant: "teal",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "LangGraph",
      "LangChain",
      "LangSmith",
      "Semantic Search",
      "Context Engineering",
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    icon: "⚡",
    variant: "gold",
    skills: ["FastAPI", "Django", "REST APIs", "API Integration", "Python"],
  },
  {
    id: 3,
    name: "Databases & Storage",
    icon: "🗄️",
    variant: "teal",
    skills: ["Supabase", "Vector Databases", "ChromaDB", "SQLite"],
  },
  {
    id: 4,
    name: "Frontend",
    icon: "💻",
    variant: "blue",
    skills: ["React", "Next.js", "Streamlit", "HTML / CSS"],
  },
  {
    id: 5,
    name: "Developer Tools",
    icon: "🛠️",
    variant: "gold",
    skills: ["Git", "GitHub", "Trello", "VS Code"],
  },
  {
    id: 6,
    name: "Soft Skills",
    icon: "🤝",
    variant: "teal",
    skills: [
      "Problem Solving",
      "Communication",
      "Collaboration",
      "Critical Thinking",
      "Adaptability",
    ],
  },
];