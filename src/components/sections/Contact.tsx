"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sindrellaacen512@gmail.com", href: "mailto:sindrellaacen512@gmail.com" },
  { icon: Phone, label: "Phone", value: "+256 784 346 176", href: "tel:+256784346176" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
  { icon: Github, label: "GitHub", value: "github.com/sindrella-45", href: "https://github.com/sindrella-45" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !message) return;
    window.location.href = `mailto:sindrellaacen512@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  };

  return React.createElement("section", { id: "contact", className: "section-wrap bg1" },
    React.createElement("div", { className: "section-num" }, "06 / Connect"),
    React.createElement("h2", { className: "section-title" },
      "Let's Build Something ", React.createElement("em", null, "Together")
    ),
    React.createElement("div", { className: "contact-grid" },

      // LEFT — info
      React.createElement("div", null,
        React.createElement("p", { className: "contact-intro" },
          "I'm open to internships, junior AI engineering roles, LLM development projects, and AI automation opportunities. Let's talk about how I can contribute to your team."
        ),
        React.createElement("div", { className: "contact-items" },
          ...contactInfo.map((item, i) =>
            React.createElement(motion.div, {
              key: i,
              className: "contact-item",
              initial: { opacity: 0, x: -16 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 }
            },
              React.createElement("div", { className: "ci-icon" },
                React.createElement(item.icon, { size: 15 })
              ),
              React.createElement("div", null,
                React.createElement("div", { className: "ci-label" }, item.label),
                item.href
                  ? React.createElement("div", { className: "ci-value" },
                      React.createElement("a", { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }, item.value)
                    )
                  : React.createElement("div", { className: "ci-value" }, item.value)
              )
            )
          )
        ),
        React.createElement("div", { className: "contact-socials" },
          React.createElement("a", { href: "mailto:sindrellaacen512@gmail.com", className: "soc-btn" },
            React.createElement(Mail, { size: 13 }), "Email"
          ),
          React.createElement("a", { href: "https://github.com/sindrella-45", target: "_blank", rel: "noopener noreferrer", className: "soc-btn" },
            React.createElement(Github, { size: 13 }), "GitHub"
          ),
          React.createElement("a", { href: "https://linkedin.com/in/sindrella-acen", target: "_blank", rel: "noopener noreferrer", className: "soc-btn" },
            React.createElement(Linkedin, { size: 13 }), "LinkedIn"
          )
        )
      ),

      // RIGHT — form
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      },
        React.createElement("form", { className: "form", onSubmit: handleSubmit },
          React.createElement("div", { className: "form-row" },
            React.createElement("div", { className: "form-group" },
              React.createElement("label", { className: "form-label" }, "Name"),
              React.createElement("input", { className: "form-input", name: "name", value: form.name, onChange: handleChange, type: "text", placeholder: "Your name", required: true })
            ),
            React.createElement("div", { className: "form-group" },
              React.createElement("label", { className: "form-label" }, "Email"),
              React.createElement("input", { className: "form-input", name: "email", value: form.email, onChange: handleChange, type: "email", placeholder: "your@email.com", required: true })
            )
          ),
          React.createElement("div", { className: "form-group" },
            React.createElement("label", { className: "form-label" }, "Subject"),
            React.createElement("input", { className: "form-input", name: "subject", value: form.subject, onChange: handleChange, type: "text", placeholder: "What's this about?" })
          ),
          React.createElement("div", { className: "form-group" },
            React.createElement("label", { className: "form-label" }, "Message"),
            React.createElement("textarea", { className: "form-textarea", name: "message", value: form.message, onChange: handleChange, rows: 6, placeholder: "Tell me about your project or opportunity...", required: true })
          ),
          React.createElement("button", { type: "submit", className: "form-submit" }, "SEND MESSAGE →")
        )
      )
    )
  );
}
