"use client";

import React from "react";
import { motion } from "framer-motion";

const reasons = [
  { num: "01", icon: "🤖", title: "AI Agent Development", desc: "LangGraph-powered multi-agent architectures for complex reasoning and automation." },
  { num: "02", icon: "🧩", title: "RAG Systems", desc: "End-to-end RAG pipelines from document ingestion to context-aware generation." },
  { num: "03", icon: "⚡", title: "FastAPI Backends", desc: "Production-ready, high-performance REST APIs for AI applications." },
  { num: "04", icon: "🔗", title: "LLM Integration", desc: "Seamless OpenAI API integration with structured outputs and prompt engineering." },
  { num: "05", icon: "🌍", title: "Real-World Impact", desc: "Track record building AI for agriculture, finance, and career development." },
  { num: "06", icon: "📈", title: "Continuous Growth", desc: "Fast learner bridging academic rigour with practical project execution." },
  { num: "07", icon: "🔒", title: "Intelligent Automation", desc: "Scalable pipelines replacing manual workflows with intelligent decision-making." },
  { num: "08", icon: "🤝", title: "Team Collaboration", desc: "Clear communicator who adapts quickly and documents work thoroughly." },
];

export function WhyMe() {
  return React.createElement("section", { id: "why", className: "section-wrap bg2" },
    React.createElement("div", { className: "section-num" }, "05 / Value"),
    React.createElement("h2", { className: "section-title" },
      "Why Work ", React.createElement("em", null, "With Me")
    ),
    React.createElement("div", { className: "why-grid" },
      ...reasons.map((r, i) =>
        React.createElement(motion.div, {
          key: i,
          className: "why-card",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06 }
        },
          React.createElement("div", { className: "why-card-num" }, r.num),
          React.createElement("div", { className: "why-icon" }, r.icon),
          React.createElement("div", { className: "why-title" }, r.title),
          React.createElement("div", { className: "why-desc" }, r.desc)
        )
      )
    )
  );
}
