"use client";

import React from "react";
import { motion } from "framer-motion";

const experience = [
  { role: "AI Application Developer", org: "Independent / Open Source Projects", date: "2024 – Present", desc: "Built and shipped multiple full-stack AI applications integrating LLM orchestration, RAG pipelines, vector databases, and FastAPI backends. Focused on real-world impact across agriculture, finance, and education verticals.", tags: ["LangGraph","OpenAI API","RAG","FastAPI"], accent: "#00d4aa" },
  { role: "Backend Engineer", org: "Freelance Projects", date: "2023 – 2024", desc: "Developed full-stack web applications using Django and REST APIs, delivering business websites and admin systems for local businesses including Mayondo Wood & Furniture.", tags: ["Django","REST APIs","Python"], accent: "#f0a500" },
];

const education = [
  { icon: "🎓", degree: "Software & AI Engineering", school: "Turing College, Lithuania", date: "2025 – 2026", desc: "Completing structured curriculum in AI Engineering: LLM development, agent orchestration, RAG systems, evaluation frameworks, and production deployment." },
  { icon: "📜", degree: "Certificate in Python Development", school: "Refactory Academy, Uganda", date: "2025", desc: "Foundational to advanced Python programming, software development principles, and practical project-based learning." },
];

const cardStyle: React.CSSProperties = {
  background: "rgba(11,22,40,0.85)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "1.5rem 1.75rem",
  backdropFilter: "blur(10px)",
};

export function Experience() {
  return React.createElement("section", {
    id: "experience",
    style: { padding: "6rem 2rem", background: "#070f1f" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Header
      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" } }, "04 / Journey"),
        React.createElement("h2", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#e8f0fe", margin: "0 0 1rem 0" } },
          "Experience & ", React.createElement("span", { style: { color: "#00d4aa" } }, "Education")
        ),
        React.createElement("div", { style: { width: "60px", height: "3px", background: "linear-gradient(90deg,#00d4aa,#f0a500)", borderRadius: "2px" } })
      ),

      // Two columns
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }, className: "exp-grid" },

        // Experience timeline
        React.createElement("div", null,
          React.createElement("h3", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#4d6b8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" } }, "Experience"),
          React.createElement("div", { style: { borderLeft: "1px solid rgba(0,212,170,0.2)", paddingLeft: "0" } },
            ...experience.map((item, i) =>
              React.createElement(motion.div, {
                key: i,
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                style: { position: "relative", paddingLeft: "2.5rem", marginBottom: "2rem" }
              },
                // Dot
                React.createElement("div", { style: { position: "absolute", left: "-7px", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: item.accent, boxShadow: `0 0 8px ${item.accent}80` } }),
                React.createElement("div", { style: cardStyle },
                  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "0.75rem" } },
                    React.createElement("div", null,
                      React.createElement("div", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8f0fe" } }, item.role),
                      React.createElement("div", { style: { fontSize: "0.875rem", color: item.accent, marginTop: "2px" } }, item.org)
                    ),
                    React.createElement("span", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#4d6b8c" } }, item.date)
                  ),
                  React.createElement("p", { style: { fontSize: "0.875rem", color: "#8ba3c7", lineHeight: 1.75, margin: "0 0 0.75rem 0" } }, item.desc),
                  React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" } },
                    ...item.tags.map(tag => React.createElement("span", { key: tag, style: { fontSize: "0.72rem", fontFamily: "monospace", padding: "3px 10px", borderRadius: "100px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#4d6b8c" } }, tag))
                  )
                )
              )
            )
          )
        ),

        // Education
        React.createElement("div", null,
          React.createElement("h3", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#4d6b8c", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5rem" } }, "Education"),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "1.25rem" } },
            ...education.map((item, i) =>
              React.createElement(motion.div, {
                key: i,
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.12 },
                style: cardStyle
              },
                React.createElement("div", { style: { fontSize: "2rem", marginBottom: "0.75rem" } }, item.icon),
                React.createElement("div", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8f0fe", marginBottom: "0.25rem" } }, item.degree),
                React.createElement("div", { style: { fontSize: "0.875rem", color: "#00d4aa", marginBottom: "0.25rem" } }, item.school),
                React.createElement("div", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#4d6b8c", marginBottom: "0.75rem" } }, item.date),
                React.createElement("p", { style: { fontSize: "0.875rem", color: "#8ba3c7", lineHeight: 1.7, margin: 0 } }, item.desc)
              )
            )
          )
        )
      )
    )
  );
}
