"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: "🌱",
    name: "CropGuard AI",
    subtitle: "AI Agent · Crop Disease Detection",
    desc: "An intelligent agricultural assistant combining AI Agents, Retrieval-Augmented Generation, and semantic search to help farmers identify crop diseases and receive actionable recommendations. Built with a LangGraph multi-agent architecture for East African smallholder farmers.",
    tags: ["LangGraph","RAG","FastAPI","OpenAI","Supabase","LangSmith"],
    github: "https://github.com/sindrella-45/Cropguard",
  },
  {
    icon: "🌤",
    name: "Weather Intelligence Assistant",
    subtitle: "RAG · Real-Time Data · NLP",
    desc: "An AI-powered weather platform combining real-time data, RAG, and natural language capabilities. Delivers contextual insights, AI-powered summaries, and context-aware recommendations through prompt engineering and vector-based retrieval.",
    tags: ["FastAPI","OpenAI","RAG","Vector DB","Python"],
    github: "https://github.com/sindrella-45/forecaster",
  },
  {
    icon: "💰",
    name: "SACCO AI Financial Assistant",
    subtitle: "RAG · Document Intelligence · Q&A",
    desc: "An intelligent financial assistant for SACCO members using RAG and semantic search to answer questions from institutional policies, loan guidelines, and financial documents. Provides personalised guidance from embedded knowledge bases.",
    tags: ["OpenAI","FastAPI","RAG","Supabase","Vector DB"],
    github: null,
  },
  {
    icon: "🎤",
    name: "AI Interview Coach",
    subtitle: "LLM · Feedback Engine · Streamlit",
    desc: "An interactive interview preparation platform that generates dynamic questions, evaluates responses, and delivers personalised AI feedback. Helps candidates improve through realistic interview simulation and targeted coaching.",
    tags: ["Streamlit","OpenAI","Python","Prompt Engineering"],
    github: "https://github.com/sindrella-45/Interview-practice",
  },
  {
    icon: "🪵",
    name: "Mayondo Wood & Furniture",
    subtitle: "Full-Stack · Django · Business Platform",
    desc: "A full-stack web platform for a furniture business featuring a product catalog, dynamic content management, and an admin dashboard. Built with Django for a clean, responsive digital storefront.",
    tags: ["Django","Python","HTML/CSS","Full-Stack"],
    github: "https://github.com/sindrella-45/myproject",
  },
];

export function Projects() {
  return React.createElement("section", {
    id: "projects",
    style: { padding: "6rem 2rem", background: "#040d1a" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Header
      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", {
          style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }
        }, "03 / Work"),
        React.createElement("h2", {
          style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#e8f0fe", margin: "0 0 1rem 0" }
        },
          "Featured ",
          React.createElement("span", { style: { color: "#00d4aa" } }, "Projects")
        ),
        React.createElement("div", {
          style: { width: "60px", height: "3px", background: "linear-gradient(90deg,#00d4aa,#f0a500)", borderRadius: "2px" }
        })
      ),

      // Cards grid
      React.createElement("div", {
        style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.75rem" }
      },
        ...projects.map((p, i) =>
          React.createElement(motion.div, {
            key: i,
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            style: {
              background: "rgba(11,22,40,0.85)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "2rem",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }
          },

            // Top gradient accent bar
            React.createElement("div", {
              style: { position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg,#00d4aa,#f0a500)" }
            }),

            // Icon
            React.createElement("div", {
              style: { width: "52px", height: "52px", borderRadius: "14px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem" }
            }, p.icon),

            // Name
            React.createElement("h3", {
              style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#e8f0fe", margin: "0 0 0.25rem 0" }
            }, p.name),

            // Subtitle
            React.createElement("p", {
              style: { fontFamily: "monospace", fontSize: "0.78rem", color: "#00d4aa", margin: "0 0 1rem 0" }
            }, p.subtitle),

            // Description
            React.createElement("p", {
              style: { fontSize: "0.9rem", color: "#8ba3c7", lineHeight: 1.7, margin: "0 0 1.5rem 0", flex: 1 }
            }, p.desc),

            // Tags
            React.createElement("div", {
              style: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }
            },
              ...p.tags.map(tag =>
                React.createElement("span", {
                  key: tag,
                  style: { fontSize: "0.72rem", fontFamily: "monospace", padding: "4px 12px", borderRadius: "100px", background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)", color: "#8ba3c7" }
                }, tag)
              )
            ),

            // GitHub button — visible at bottom of card
            p.github
              ? React.createElement("a", {
                  href: p.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,212,170,0.3)",
                    color: "#00d4aa",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    fontFamily: "DM Sans, sans-serif",
                    transition: "all 0.2s",
                  }
                },
                // GitHub SVG icon inline
                React.createElement("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 16,
                  height: 16,
                  viewBox: "0 0 24 24",
                  fill: "currentColor"
                },
                  React.createElement("path", {
                    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  })
                ),
                "View on GitHub"
              )
              : React.createElement("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#4d6b8c",
                    fontSize: "0.85rem",
                    fontFamily: "DM Sans, sans-serif",
                  }
                }, "🔒 Private Repository")
          )
        )
      )
    )
  );
}
