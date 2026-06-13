"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  { icon: "🧠", name: "AI & LLM Engineering", skills: ["OpenAI API","Prompt Engineering","RAG","AI Agents","LangGraph","LangChain","LangSmith","Semantic Search","Context Engineering"] },
  { icon: "⚡", name: "Backend Development", skills: ["FastAPI","Django","REST APIs","API Integration","Python"] },
  { icon: "🗄️", name: "Databases & Storage", skills: ["Supabase","Vector Databases","ChromaDB","SQLite"] },
  { icon: "💻", name: "Frontend", skills: ["React","Next.js","Streamlit","HTML / CSS"] },
  { icon: "🛠️", name: "Developer Tools", skills: ["Git","GitHub","Trello","VS Code"] },
  { icon: "🤝", name: "Soft Skills", skills: ["Problem Solving","Communication","Collaboration","Critical Thinking","Adaptability"] },
];

export function Skills() {
  return React.createElement("section", { id: "skills", className: "section-wrap bg1" },
    React.createElement("div", { className: "section-num" }, "02 / Capabilities"),
    React.createElement("h2", { className: "section-title" },
      "Technical ", React.createElement("em", null, "Skills")
    ),
    React.createElement("div", { className: "skills-grid" },
      ...categories.map((cat, i) =>
        React.createElement(motion.div, {
          key: i,
          className: "skill-cat",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 }
        },
          React.createElement("div", { className: "skill-cat-head" },
            React.createElement("div", { className: "skill-cat-icon" }, cat.icon),
            React.createElement("div", { className: "skill-cat-name" }, cat.name)
          ),
          React.createElement("div", { className: "skill-pills" },
            ...cat.skills.map(s => React.createElement("span", { key: s, className: "skill-pill" }, s))
          )
        )
      )
    )
  );
}
