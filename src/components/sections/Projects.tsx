"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { num: "01", name: "CropGuard AI", sub: "// AI Agent · Crop Disease Detection · LangGraph", desc: "An intelligent agricultural assistant combining AI Agents, RAG, and semantic search to help farmers identify crop diseases and receive actionable recommendations. Built with a LangGraph multi-agent architecture for East African smallholder farmers.", tags: ["LangGraph","RAG","FastAPI","OpenAI","Supabase","LangSmith"], github: "https://github.com/sindrella-45/Cropguard" },
  { num: "02", name: "Weather Intelligence Assistant", sub: "// RAG · Real-Time Data · NLP", desc: "An AI-powered weather platform combining real-time data, RAG, and natural language capabilities. Delivers contextual insights and context-aware recommendations through prompt engineering and vector-based retrieval.", tags: ["FastAPI","OpenAI","RAG","Vector DB","Python"], github: "https://github.com/sindrella-45/forecaster" },
  { num: "03", name: "SACCO AI Financial Assistant", sub: "// RAG · Document Intelligence · Q&A", desc: "An intelligent financial assistant for SACCO members using RAG and semantic search to answer questions from institutional policies, loan guidelines, and financial documents. Provides personalised guidance from embedded knowledge bases.", tags: ["OpenAI","FastAPI","RAG","Supabase","Vector DB"], github: null },
  { num: "04", name: "AI Interview Coach", sub: "// LLM · Feedback Engine · Streamlit", desc: "An interactive interview preparation platform that generates dynamic questions, evaluates responses, and delivers personalised AI feedback. Helps candidates improve through realistic interview simulation.", tags: ["Streamlit","OpenAI","Python","Prompt Engineering"], github: "https://github.com/sindrella-45/Interview-practice" },
  { num: "05", name: "Mayondo Wood & Furniture", sub: "// Full-Stack · Django · Business Platform", desc: "A full-stack web platform for a furniture business featuring a product catalog, dynamic content management, and an admin dashboard. Built with Django for a clean, responsive digital storefront.", tags: ["Django","Python","HTML/CSS","Full-Stack"], github: "https://github.com/sindrella-45/myproject" },
];

export function Projects() {
  return React.createElement("section", { id: "projects", className: "section-wrap bg2" },
    React.createElement("div", { className: "section-num" }, "03 / Work"),
    React.createElement("h2", { className: "section-title" },
      "Featured ", React.createElement("em", null, "Projects")
    ),
    React.createElement("div", { className: "projects-list" },
      ...projects.map((p, i) =>
        React.createElement(motion.div, {
          key: i,
          className: "project-row",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 }
        },
          React.createElement("div", { className: "project-num" }, p.num),
          React.createElement("div", null,
            React.createElement("div", { className: "project-name" }, p.name),
            React.createElement("div", { className: "project-sub" }, p.sub),
            React.createElement("div", { className: "project-desc" }, p.desc),
            React.createElement("div", { className: "project-tags" },
              ...p.tags.map(t => React.createElement("span", { key: t, className: "project-tag" }, t))
            )
          ),
          React.createElement("div", { className: "project-link" },
            p.github
              ? React.createElement("a", { href: p.github, target: "_blank", rel: "noopener noreferrer", className: "gh-btn" }, "↗ View on GitHub")
              : React.createElement("span", { className: "private-badge" }, "🔒 Private")
          )
        )
      )
    )
  );
}
