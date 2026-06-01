"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  { icon: "🧠", name: "AI & LLM Engineering", color: "#00d4aa", skills: ["OpenAI API","Prompt Engineering","RAG","AI Agents","LangGraph","LangChain","LangSmith","Semantic Search","Context Engineering"] },
  { icon: "⚡", name: "Backend Development", color: "#f0a500", skills: ["FastAPI","Django","REST APIs","API Integration","Python"] },
  { icon: "🗄️", name: "Databases & Storage", color: "#00d4aa", skills: ["Supabase","Vector Databases","ChromaDB","SQLite"] },
  { icon: "💻", name: "Frontend", color: "#4a90e2", skills: ["React","Next.js","Streamlit","HTML / CSS"] },
  { icon: "🛠️", name: "Developer Tools", color: "#f0a500", skills: ["Git","GitHub","Trello","VS Code"] },
  { icon: "🤝", name: "Soft Skills", color: "#00d4aa", skills: ["Problem Solving","Communication","Collaboration","Critical Thinking","Adaptability"] },
];

export function Skills() {
  return React.createElement("section", {
    id: "skills",
    style: { padding: "6rem 2rem", background: "#070f1f" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Header
      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" } }, "02 / Capabilities"),
        React.createElement("h2", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#e8f0fe", margin: "0 0 1rem 0" } },
          "Technical ", React.createElement("span", { style: { color: "#00d4aa" } }, "Skills")
        ),
        React.createElement("div", { style: { width: "60px", height: "3px", background: "linear-gradient(90deg,#00d4aa,#f0a500)", borderRadius: "2px" } })
      ),

      // Grid
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" } },
        ...categories.map((cat, i) =>
          React.createElement(motion.div, {
            key: i,
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            style: { background: "rgba(11,22,40,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.75rem", backdropFilter: "blur(10px)" }
          },
            // Header
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" } },
              React.createElement("div", { style: { width: "38px", height: "38px", borderRadius: "10px", background: `${cat.color}18`, border: `1px solid ${cat.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 } }, cat.icon),
              React.createElement("h3", { style: { fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8f0fe", margin: 0 } }, cat.name)
            ),
            // Pills
            React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" } },
              ...cat.skills.map(skill =>
                React.createElement("span", {
                  key: skill,
                  style: { background: `${cat.color}0a`, border: `1px solid ${cat.color}20`, borderRadius: "100px", padding: "5px 14px", fontSize: "0.78rem", color: "#8ba3c7", fontFamily: "monospace" }
                }, skill)
              )
            )
          )
        )
      )
    )
  );
}
