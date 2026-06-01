"use client";

import React from "react";
import { motion } from "framer-motion";

const reasons = [
  { icon: "🤖", title: "AI Agent Development", desc: "LangGraph-powered multi-agent architectures for complex reasoning and task automation workflows." },
  { icon: "🧩", title: "RAG Systems", desc: "End-to-end RAG pipelines from document ingestion to semantic search and context-aware generation." },
  { icon: "⚡", title: "FastAPI Backends", desc: "Production-ready, high-performance REST APIs and async backend services for AI applications." },
  { icon: "🔗", title: "LLM Integration", desc: "Seamless OpenAI API integration with structured outputs, function calling, and prompt engineering." },
  { icon: "🌍", title: "Real-World Impact", desc: "Track record of building AI for domains that matter — agriculture, finance, career development." },
  { icon: "📈", title: "Continuous Growth", desc: "Fast learner who ships projects while upskilling — bridging academic rigour with practical execution." },
  { icon: "🔒", title: "Intelligent Automation", desc: "Designing automated pipelines that replace manual workflows with scalable, intelligent decision-making." },
  { icon: "🤝", title: "Team Collaboration", desc: "Clear communicator who documents work well, collaborates openly, and adapts to team conventions quickly." },
];

export function WhyMe() {
  return React.createElement("section", {
    id: "why",
    style: { padding: "6rem 2rem", background: "#040d1a" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" } }, "05 / Value"),
        React.createElement("h2", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#e8f0fe", margin: "0 0 1rem 0" } },
          "Why Work ", React.createElement("span", { style: { color: "#00d4aa" } }, "With Me")
        ),
        React.createElement("div", { style: { width: "60px", height: "3px", background: "linear-gradient(90deg,#00d4aa,#f0a500)", borderRadius: "2px" } })
      ),

      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" } },
        ...reasons.map((r, i) =>
          React.createElement(motion.div, {
            key: i,
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.07 },
            style: { background: "rgba(11,22,40,0.85)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "1.5rem", textAlign: "center", backdropFilter: "blur(10px)" }
          },
            React.createElement("div", { style: { fontSize: "2rem", marginBottom: "0.75rem" } }, r.icon),
            React.createElement("div", { style: { fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#e8f0fe", marginBottom: "0.5rem" } }, r.title),
            React.createElement("div", { style: { fontSize: "0.82rem", color: "#8ba3c7", lineHeight: 1.6 } }, r.desc)
          )
        )
      )
    )
  );
}
