"use client";

import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return React.createElement("footer", {
    style: { background: "#040d1a", borderTop: "1px solid rgba(0,212,170,0.1)", padding: "3rem 2rem", textAlign: "center" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Name
      React.createElement("div", {
        style: { fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem", background: "linear-gradient(90deg,#00d4aa,#f0a500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
      }, "Sindrella Acen"),

      // Tagline
      React.createElement("p", {
        style: { fontSize: "0.9rem", color: "#8ba3c7", fontStyle: "italic", marginBottom: "1.5rem" }
      }, '"Building intelligent systems that transform ideas into impact."'),

      // Nav links
      React.createElement("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", marginBottom: "2rem" } },
        ...footerLinks.map(link =>
          React.createElement("a", {
            key: link.href,
            href: link.href,
            style: { fontSize: "0.85rem", color: "#4d6b8c", textDecoration: "none" }
          }, link.label)
        )
      ),

      // Social icons
      React.createElement("div", { style: { display: "flex", justifyContent: "center", gap: "12px", marginBottom: "1.5rem" } },
        React.createElement("a", {
          href: "mailto:acencindy82@gmail.com",
          style: { width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8ba3c7", textDecoration: "none" }
        }, React.createElement(Mail, { size: 16 })),
        React.createElement("a", {
          href: "https://github.com/sindrella-45",
          target: "_blank",
          rel: "noopener noreferrer",
          style: { width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8ba3c7", textDecoration: "none" }
        }, React.createElement(Github, { size: 16 })),
        React.createElement("a", {
          href: "https://www.linkedin.com/in/sindrella-acen-bb543137a",
          target: "_blank",
          rel: "noopener noreferrer",
          style: { width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(0,212,170,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8ba3c7", textDecoration: "none" }
        }, React.createElement(Linkedin, { size: 16 }))
      ),

      // Copyright
      React.createElement("p", {
        style: { fontFamily: "monospace", fontSize: "0.8rem", color: "#4d6b8c" }
      }, "© 2025 Sindrella Acen · AI Engineer · Kampala, Uganda")
    )
  );
}
