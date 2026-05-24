"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { colors, radius, cardStyle, fadeRise, stagger } from "@/lib/theme";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "SQL", "Swift", "Shell"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "FastAPI", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Tools & Platforms",
      skills: ["PostgreSQL", "MySQL", "Firebase", "Docker", "Redis", "Celery", "Git/GitHub", "Selenium", "Nginx", "Streamlit", "Azure"],
    },
    {
      title: "AI & Automation",
      skills: ["Claude API integration", "LLM prompt engineering", "REST API design", "workflow automation"],
    },
  ];

  const certifications = [
    { name: "Red Hat Academy", subtitle: "Linux Systems" },
    { name: "Coursera", subtitle: "Cybersecurity Foundations" },
  ];

  return (
    <section id="skills" style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div className="site-container" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2 style={{ fontSize: "2.75rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "16px" }}>
            Skills &amp; Technologies
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: "1.15rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Languages, frameworks, and tools I build with.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeRise} style={{ ...cardStyle, padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: colors.textPrimary }}>{category.title}</h3>
                <span
                  style={{
                    padding: "2px 10px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    background: colors.accentTint,
                    border: `1px solid ${colors.accentBorder}`,
                    color: colors.accent,
                  }}
                >
                  {category.skills.length}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "7px 14px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: colors.textPrimary,
                      background: colors.surfaceAlt,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "9999px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ ...cardStyle, padding: "32px" }}
        >
          <h4 style={{ fontSize: "1.25rem", fontWeight: 600, color: colors.textPrimary, textAlign: "center", marginBottom: "24px" }}>
            Certifications &amp; Training
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{
                  padding: "14px 22px",
                  background: colors.surfaceAlt,
                  border: `1px solid ${colors.border}`,
                  borderRadius: radius.md,
                }}
              >
                <div style={{ color: colors.textPrimary, fontWeight: 600, fontSize: "14px" }}>{cert.name}</div>
                <div style={{ color: colors.textSecondary, fontSize: "12px" }}>{cert.subtitle}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;