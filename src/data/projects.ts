export interface Project {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "CropGuard AI",
    subtitle: "AI Agent · Crop Disease Detection",
    description:
      "An intelligent agricultural assistant combining AI Agents, Retrieval-Augmented Generation, and semantic search to help farmers identify crop diseases and receive actionable recommendations. Built with a LangGraph multi-agent architecture for East African smallholder farmers.",
    icon: "🌱",
    tags: ["LangGraph", "RAG", "FastAPI", "OpenAI", "Supabase", "LangSmith"],
    github: "https://github.com/sindrella-45/Cropguard",
    featured: true,
  },
  {
    id: 2,
    name: "Weather Intelligence Assistant",
    subtitle: "RAG · Real-Time Data · NLP",
    description:
      "An AI-powered weather platform combining real-time data, RAG, and natural language capabilities. Delivers contextual insights, AI-powered summaries, and context-aware recommendations through prompt engineering and vector-based retrieval.",
    icon: "🌤",
    tags: ["FastAPI", "OpenAI", "RAG", "Vector DB", "Python"],
    github: "https://github.com/sindrella-45/forecaster",
    featured: true,
  },
  {
    id: 3,
    name: "SACCO AI Financial Assistant",
    subtitle: "RAG · Document Intelligence · Q&A",
    description:
      "An intelligent financial assistant for SACCO members using RAG and semantic search to answer questions from institutional policies, loan guidelines, and financial documents. Provides personalised guidance from embedded knowledge bases.",
    icon: "💰",
    tags: ["OpenAI", "FastAPI", "RAG", "Supabase", "Vector DB"],
    featured: true,
  },
  {
    id: 4,
    name: "AI Interview Coach",
    subtitle: "LLM · Feedback Engine · Streamlit",
    description:
      "An interactive interview preparation platform that generates dynamic questions, evaluates responses, and delivers personalised AI feedback. Helps candidates improve through realistic interview simulation and targeted coaching.",
    icon: "🎤",
    tags: ["Streamlit", "OpenAI", "Python", "Prompt Engineering"],
    github: "https://github.com/sindrella-45/Interview-practice",
  },
  {
    id: 5,
    name: "Mayondo Wood & Furniture",
    subtitle: "Full-Stack · Django · Business Platform",
    description:
      "A full-stack web platform for a furniture business featuring a product catalog, dynamic content management, and an admin dashboard. Built with Django for a clean, responsive digital storefront.",
    icon: "🪵",
    tags: ["Django", "Python", "HTML/CSS", "Full-Stack"],
    github: "https://github.com/sindrella-45/myproject",
  },
];