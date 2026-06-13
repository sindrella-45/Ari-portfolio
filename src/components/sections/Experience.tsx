"use client";

import React from "react";
import { motion } from "framer-motion";

const experience = [
  { role: "AI Application Developer", org: "Independent / Open Source Projects", orgClass: "tl-org", date: "2024 — Present", desc: "Built and shipped multiple full-stack AI applications integrating LLM orchestration, RAG pipelines, vector databases, and FastAPI backends. Focused on real-world impact across agriculture, finance, and education.", tags: ["LangGraph","OpenAI API","RAG","FastAPI"], dot: "tl-dot" },
  { role: "Backend Engineer", org: "Freelance Projects", orgClass: "tl-org gold", date: "2023 — 2024", desc: "Developed full-stack web applications using Django and REST APIs, delivering business websites and admin systems for local businesses.", tags: ["Django","REST APIs","Python"], dot: "tl-dot gold" },
];

const education = [
  { icon: "🎓", degree: "Software & AI Engineering", school: "Turing College, Lithuania", date: "2025 — 2026", desc: "Completing structured curriculum in AI Engineering: LLM development, agent orchestration, RAG systems, evaluation frameworks, and production deployment." },
  { icon: "📜", degree: "Certificate in Python Development", school: "Refactory Academy, Uganda", date: "2025", desc: "Foundational to advanced Python programming, software development principles, and practical project-based learning." },
];

export function Experience() {
  return React.createElement("section", { id: "experience", className: "section-wrap bg1" },
    React.createElement("div", { className: "section-num" }, "04 / Journey"),
    React.createElement("h2", { className: "section-title" },
      "Experience & ", React.createElement("em", null, "Education")
    ),
    React.createElement("div", { className: "exp-edu-grid" },

      // Experience
      React.createElement("div", null,
        React.createElement("div", { className: "exp-col-title" }, "Experience"),
        React.createElement("div", { className: "timeline" },
          ...experience.map((item, i) =>
            React.createElement(motion.div, {
              key: i,
              className: "tl-item",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 }
            },
              React.createElement("div", { className: item.dot }),
              React.createElement("div", { className: "tl-card" },
                React.createElement("div", { className: "tl-role" }, item.role),
                React.createElement("div", { className: item.orgClass }, item.org),
                React.createElement("div", { className: "tl-date" }, item.date),
                React.createElement("div", { className: "tl-desc" }, item.desc),
                React.createElement("div", { className: "tl-tags" },
                  ...item.tags.map(t => React.createElement("span", { key: t, className: "tl-tag" }, t))
                )
              )
            )
          )
        )
      ),

      // Education
      React.createElement("div", null,
        React.createElement("div", { className: "exp-col-title" }, "Education"),
        React.createElement("div", { className: "edu-items" },
          ...education.map((item, i) =>
            React.createElement(motion.div, {
              key: i,
              className: "edu-card",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 }
            },
              React.createElement("div", { className: "edu-icon" }, item.icon),
              React.createElement("div", { className: "edu-degree" }, item.degree),
              React.createElement("div", { className: "edu-school" }, item.school),
              React.createElement("div", { className: "edu-date" }, item.date),
              React.createElement("div", { className: "edu-desc" }, item.desc)
            )
          )
        )
      )
    )
  );
}
