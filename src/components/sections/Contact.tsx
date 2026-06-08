"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sindrellaacen512@gmail.com", href: "mailto:sindrellaacen512@gmail.com" },
  { icon: Phone, label: "Phone", value: "+256 784 423 891", href: "tel:+256784423891" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
  { icon: Github, label: "GitHub", value: "github.com/sindrella-45", href: "https://github.com/sindrella-45" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "#0b1628",
  padding: "12px 16px",
  fontSize: "0.9rem",
  color: "#e8f0fe",
  outline: "none",
  fontFamily: "DM Sans, sans-serif",
  boxSizing: "border-box",
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !message) return;
    window.location.href = `mailto:sindrellaacen512@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return React.createElement("section", {
    id: "contact",
    style: { padding: "6rem 2rem", background: "#070f1f" }
  },
    React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto" } },

      // Header
      React.createElement("div", { style: { marginBottom: "3rem" } },
        React.createElement("span", { style: { fontFamily: "monospace", fontSize: "0.75rem", color: "#00d4aa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" } }, "06 / Connect"),
        React.createElement("h2", { style: { fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(2rem,3.5vw,3rem)", color: "#e8f0fe", margin: "0 0 1rem 0" } },
          "Let's Build Something ", React.createElement("span", { style: { color: "#00d4aa" } }, "Together")
        ),
        React.createElement("div", { style: { width: "60px", height: "3px", background: "linear-gradient(90deg,#00d4aa,#f0a500)", borderRadius: "2px" } })
      ),

      // Two columns
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem" }, className: "contact-grid" },

        // Info
        React.createElement("div", null,
          React.createElement("p", { style: { fontSize: "1rem", color: "#8ba3c7", lineHeight: 1.8, marginBottom: "2rem" } },
            "I'm open to internships, junior AI engineering roles, LLM development projects, and AI automation opportunities. Let's talk about how I can contribute to your team."
          ),
          // Contact items
          React.createElement("div", { style: { marginBottom: "2rem" } },
            ...contactInfo.map((item, i) =>
              React.createElement(motion.div, {
                key: i,
                initial: { opacity: 0, x: -16 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 },
                style: { display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }
              },
                React.createElement("div", { style: { width: "40px", height: "40px", borderRadius: "10px", border: "1px solid rgba(0,212,170,0.2)", background: "rgba(0,212,170,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#00d4aa" } },
                  React.createElement(item.icon, { size: 16 })
                ),
                React.createElement("div", null,
                  React.createElement("div", { style: { fontFamily: "monospace", fontSize: "0.72rem", color: "#4d6b8c", textTransform: "uppercase", letterSpacing: "0.06em" } }, item.label),
                  item.href
                    ? React.createElement("a", { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer", style: { fontSize: "0.875rem", color: "#e8f0fe", textDecoration: "none" } }, item.value)
                    : React.createElement("span", { style: { fontSize: "0.875rem", color: "#e8f0fe" } }, item.value)
                )
              )
            )
          ),
          // Social buttons
          React.createElement("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap" } },
            React.createElement("a", { href: "mailto:sindrellaacen512@gmail.com", style: { display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", color: "#8ba3c7", textDecoration: "none", fontSize: "0.85rem" } },
              React.createElement(Mail, { size: 14 }), "Email"
            ),
            React.createElement("a", { href: "https://github.com/sindrella-45", target: "_blank", rel: "noopener noreferrer", style: { display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", color: "#8ba3c7", textDecoration: "none", fontSize: "0.85rem" } },
              React.createElement(Github, { size: 14 }), "GitHub"
            ),
            React.createElement("a", { href: "https://www.linkedin.com/in/sindrella-acen-bb543137a", target: "_blank", rel: "noopener noreferrer", style: { display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", color: "#8ba3c7", textDecoration: "none", fontSize: "0.85rem" } },
              React.createElement(Linkedin, { size: 14 }), "LinkedIn"
            )
          )
        ),

        // Form
        React.createElement(motion.div, {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 }
        },
          React.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: "1.25rem" } },
            // Name + Email row
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }, className: "form-row" },
              React.createElement("div", null,
                React.createElement("label", { style: { display: "block", fontFamily: "monospace", fontSize: "0.75rem", color: "#8ba3c7", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" } }, "Name"),
                React.createElement("input", { name: "name", value: form.name, onChange: handleChange, type: "text", placeholder: "Your name", required: true, style: inputStyle })
              ),
              React.createElement("div", null,
                React.createElement("label", { style: { display: "block", fontFamily: "monospace", fontSize: "0.75rem", color: "#8ba3c7", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" } }, "Email"),
                React.createElement("input", { name: "email", value: form.email, onChange: handleChange, type: "email", placeholder: "your@email.com", required: true, style: inputStyle })
              )
            ),
            // Subject
            React.createElement("div", null,
              React.createElement("label", { style: { display: "block", fontFamily: "monospace", fontSize: "0.75rem", color: "#8ba3c7", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" } }, "Subject"),
              React.createElement("input", { name: "subject", value: form.subject, onChange: handleChange, type: "text", placeholder: "What's this about?", style: inputStyle })
            ),
            // Message
            React.createElement("div", null,
              React.createElement("label", { style: { display: "block", fontFamily: "monospace", fontSize: "0.75rem", color: "#8ba3c7", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" } }, "Message"),
              React.createElement("textarea", { name: "message", value: form.message, onChange: handleChange, rows: 6, placeholder: "Tell me about your project or opportunity...", required: true, style: { ...inputStyle, resize: "none" } })
            ),
            // Submit
            React.createElement("button", {
              type: "submit",
              style: { width: "100%", padding: "14px", borderRadius: "10px", background: "#00d4aa", color: "#040d1a", fontWeight: 600, fontSize: "0.95rem", border: "none", cursor: "pointer", fontFamily: "DM Sans, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }
            }, "Send Message →")
          )
        )
      )
    )
  );
}
