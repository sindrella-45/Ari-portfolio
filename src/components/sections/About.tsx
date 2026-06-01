"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { num: "5+", label: "AI Projects Built" },
  { num: "RAG", label: "Core Specialisation" },
  { num: "LLM", label: "Application Focus" },
  { num: "🌍", label: "Kampala, Uganda" },
];

const languages = [
  { name: "English", level: "Fluent", color: "#00d4aa" },
  { name: "Luo", level: "Native", color: "#f0a500" },
  { name: "Spanish", level: "Beginner", color: "#4d6b8c" },
  { name: "German", level: "Beginner", color: "#4d6b8c" },
];

const sectionStyle: React.CSSProperties = {
  padding: "6rem 2rem",
  background: "#040d1a",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(11,22,40,0.85)",
  border: "1px solid rgba(0,212,170,0.12)",
  borderRadius: "12px",
  padding: "1.25rem 1.5rem",
  backdropFilter: "blur(10px)",
};

export function About() {
  return React.createElement("section", { id: "about", style: sectionStyle },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Section label
      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", {
          style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }
        }, "01 / Who I Am"),
        React.createElement("h2", {
          style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#e8f0fe", margin: "0 0 1rem 0", letterSpacing: "-0.02em" }
        },
          "Turning AI Ideas into ",
          React.createElement("span", { style: { color: "#00d4aa" } }, "Real Systems")
        ),
        React.createElement("div", { style: { width: "60px", height: "3px", background: "linear-gradient(90deg, #00d4aa, #f0a500)", borderRadius: "2px" } })
      ),

      // Grid
      React.createElement("div", { className: "about-grid" },

        // LEFT
        React.createElement("div", null,
          // Stats
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" } },
            ...stats.map((stat, i) =>
              React.createElement(motion.div, {
                key: i,
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                style: cardStyle
              },
                React.createElement("div", { style: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#00d4aa", lineHeight: 1 } }, stat.num),
                React.createElement("div", { style: { fontSize: "0.8rem", color: "#8ba3c7", marginTop: "4px" } }, stat.label)
              )
            )
          ),

          // Languages
          React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "12px" } },
            ...languages.map((lang, i) =>
              React.createElement(motion.div, {
                key: i,
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.08 },
                style: { ...cardStyle, minWidth: "110px", textAlign: "center" }
              },
                React.createElement("div", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8f0fe" } }, lang.name),
                React.createElement("div", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#4d6b8c", marginTop: "4px" } }, lang.level),
                React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: lang.color, margin: "10px auto 0" } })
              )
            )
          )
        ),

        // RIGHT — Story
        React.createElement(motion.div, {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          style: { display: "flex", flexDirection: "column", gap: "1.25rem" }
        },
          React.createElement("p", { style: { fontSize: "1.05rem", color: "#8ba3c7", lineHeight: 1.85, margin: 0 } },
            "My journey into AI Engineering started with a simple curiosity: ",
            React.createElement("span", { style: { color: "#00d4aa", fontWeight: 500 } }, "could software actually understand and reason?"),
            " That question led me down a path of building real systems — not just studying theory, but shipping products that leverage the power of large language models."
          ),
          React.createElement("p", { style: { fontSize: "1.05rem", color: "#8ba3c7", lineHeight: 1.85, margin: 0 } },
            "I specialise in ",
            React.createElement("span", { style: { color: "#00d4aa", fontWeight: 500 } }, "LLM Application Development"),
            ", crafting intelligent agents with LangGraph, implementing RAG pipelines that pull knowledge from real data sources, and building ",
            React.createElement("span", { style: { color: "#f0a500", fontWeight: 500 } }, "FastAPI backends"),
            " that power production-grade AI services."
          ),
          React.createElement("p", { style: { fontSize: "1.05rem", color: "#8ba3c7", lineHeight: 1.85, margin: 0 } },
            "What drives me is ",
            React.createElement("span", { style: { color: "#00d4aa", fontWeight: 500 } }, "impact"),
            ". My work on CropGuard AI aims to help smallholder farmers in Africa detect crop diseases — a problem where good AI can genuinely change lives."
          ),
          React.createElement("p", { style: { fontSize: "1.05rem", color: "#8ba3c7", lineHeight: 1.85, margin: 0 } },
            "I'm a ",
            React.createElement("span", { style: { color: "#f0a500", fontWeight: 500 } }, "continuous learner"),
            " completing my AI & Software Engineering studies at Turing College, actively looking to contribute to teams building ambitious AI products."
          ),

          // Buttons
          React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" } },
            React.createElement("a", {
              href: "mailto:acencindy82@gmail.com",
              style: { display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "8px", background: "#00d4aa", color: "#040d1a", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }
            }, "✉ Get in Touch"),
            React.createElement("a", {
              href: "https://github.com/sindrella-45",
              target: "_blank",
              rel: "noopener noreferrer",
              style: { display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", color: "#e8f0fe", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }
            }, "⌥ GitHub Profile")
          )
        )
      )
    )
  );
}
