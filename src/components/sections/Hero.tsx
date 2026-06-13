"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Hero() {
  return React.createElement("section", { className: "hero", id: "home" },

    React.createElement("div", { className: "hero-noise" }),
    React.createElement("div", { className: "hero-line" }),

    // LEFT
    React.createElement(motion.div, {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7 },
      style: { position: "relative", zIndex: 2 }
    },
      React.createElement("div", { className: "hero-tag" }, "AI Engineer based in Kampala, Uganda"),

      React.createElement("h1", { className: "hero-name" },
        React.createElement("span", { className: "first" }, "Sindrella"),
        React.createElement("span", { className: "last" },
          React.createElement("span", { className: "hl" }, "A"), "cen"
        )
      ),

      React.createElement("p", { className: "hero-role" }, "// LLM Developer · RAG Systems · AI Agents · FastAPI"),

      React.createElement("p", { className: "hero-desc" },
        "Building intelligent systems that solve real-world problems through AI, Retrieval-Augmented Generation, and Agentic Workflows."
      ),

      React.createElement("div", { className: "hero-btns" },
        React.createElement("a", { href: "#projects", className: "btn-main" }, "View Projects →"),
        React.createElement("a", { href: "#contact", className: "btn-ghost" }, "Get in Touch"),
        React.createElement("a", { href: "/resume.pdf", download: true, className: "btn-ghost" },
          React.createElement(Download, { size: 14 }), " Resume"
        )
      )
    ),

    // RIGHT — profile image
    React.createElement(motion.div, {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.7, delay: 0.2 },
      className: "hero-right"
    },
      React.createElement("div", { className: "hero-img-wrap" },
        React.createElement("div", { className: "hero-img-bg" }),
        React.createElement("div", { className: "hero-img-bg2" }),
        React.createElement("div", { className: "hero-photo" },
          React.createElement("img", { src: "/profile.png", alt: "Sindrella Acen" }),
          React.createElement("div", { className: "hero-photo-overlay" })
        ),
        React.createElement("div", { className: "corner-tl" }),
        React.createElement("div", { className: "corner-br" }),
        React.createElement("div", { className: "hero-badge badge-1" }, "⚡ FastAPI Backend"),
        React.createElement("div", { className: "hero-badge badge-2" }, "🤖 LangGraph Agents"),
        React.createElement("div", { className: "hero-badge badge-3" }, "🧠 RAG Systems")
      )
    )
  );
}
