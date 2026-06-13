"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  return React.createElement("section", { id: "about", className: "section-wrap bg2" },

    React.createElement("div", { className: "section-num" }, "01 / About"),
    React.createElement("h2", { className: "section-title" },
      "Who I Am & What I ", React.createElement("em", null, "Build")
    ),

    React.createElement("div", { className: "about-grid" },

      // LEFT — stats + languages
      React.createElement("div", null,
        React.createElement("div", { className: "about-stats" },
          React.createElement("div", { className: "stat-item" }, React.createElement("div", { className: "stat-num" }, "5+"), React.createElement("div", { className: "stat-label" }, "AI Projects Shipped")),
          React.createElement("div", { className: "stat-item" }, React.createElement("div", { className: "stat-num" }, "RAG"), React.createElement("div", { className: "stat-label" }, "Core Specialisation")),
          React.createElement("div", { className: "stat-item" }, React.createElement("div", { className: "stat-num" }, "LLM"), React.createElement("div", { className: "stat-label" }, "Application Focus")),
          React.createElement("div", { className: "stat-item" }, React.createElement("div", { className: "stat-num" }, "UG"), React.createElement("div", { className: "stat-label" }, "Kampala, Uganda"))
        ),
        React.createElement("div", { className: "about-langs" },
          React.createElement("span", { className: "lang-pill active" }, "English — Fluent"),
          React.createElement("span", { className: "lang-pill gold" }, "Luo — Native"),
          React.createElement("span", { className: "lang-pill" }, "Spanish — Beginner"),
          React.createElement("span", { className: "lang-pill" }, "German — Beginner")
        )
      ),

      // RIGHT — story
      React.createElement(motion.div, {
        className: "about-text fade-up",
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 }
      },
        React.createElement("p", null,
          "My journey into AI Engineering started with a simple question: ",
          React.createElement("span", { className: "hl" }, "could software actually understand and reason?"),
          " That curiosity turned into a mission — building real systems that leverage the power of large language models to solve problems that matter."
        ),
        React.createElement("p", null,
          "I specialise in ",
          React.createElement("span", { className: "hl" }, "LLM Application Development"),
          ", crafting intelligent agents with LangGraph, building end-to-end RAG pipelines, and engineering ",
          React.createElement("span", { className: "hl-gold" }, "FastAPI backends"),
          " that power production-grade AI services."
        ),
        React.createElement("p", null,
          "What drives me is ",
          React.createElement("span", { className: "hl" }, "impact"),
          ". My CropGuard AI project helps smallholder farmers in East Africa detect crop diseases — because the best AI systems don't just impress, they change lives."
        ),
        React.createElement("p", null,
          "I'm a ",
          React.createElement("span", { className: "hl-gold" }, "continuous learner"),
          " completing my AI & Software Engineering programme at Turing College, actively looking to contribute to teams building ambitious AI products."
        ),
        React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "2rem" } },
          React.createElement("a", { href: "mailto:acencindy82@gmail.com", className: "btn-main" }, "✉ Email Me"),
          React.createElement("a", { href: "https://github.com/sindrella-45", target: "_blank", rel: "noopener noreferrer", className: "btn-ghost" }, "GitHub Profile")
        )
      )
    )
  );
}
