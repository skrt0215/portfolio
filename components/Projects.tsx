"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiFirebase,
  SiMysql,
  SiPython,
  SiNumpy,
  SiPandas,
  SiKotlin,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";
import { IconType } from "react-icons";
import { colors, radius, cardStyle, fadeRise, stagger } from "@/lib/theme";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icons: IconType[];
  github: string;
  highlight: string;
  externalLink?: string;
  buttonText?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "Overwatch",
      description:
        "Production operations command platform aggregating real-time data from 4 external systems into a unified interface. Features 90+ API endpoints, 14-table PostgreSQL schema with multi-tenant isolation, and ETL pipelines integrating Lighthouse, eHub, GeoTab fleet tracking, and AssetPanda. Built with FastAPI backend, React dashboard with Chart.js/Mapbox GL, and Selenium automation for complex authentication flows.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React", "Selenium", "Docker"],
      icons: [SiPython, SiFastapi, SiPostgresql, SiReact],
      github: "",
      highlight: "90+ API Endpoints",
    },
    {
      title: "Meridian",
      description:
        "Multi-tenant SaaS platform for field workforce operations, spanning a FastAPI backend, a Next.js operations dashboard, and a React Native mobile app. Features an autonomous LLM-powered SMS dispatch pipeline with intent classification and safety-first escalation, a hardened Claude API integration with retry/backoff and per-call telemetry logging, and per-tenant data isolation across roughly 22 domain entities.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "Claude API", "React Native", "Next.js"],
      icons: [SiPython, SiFastapi, SiPostgresql],
      github: "",
      highlight: "Autonomous AI Dispatch",
    },
    {
      title: "AttendEase",
      description:
        "Innovative mobile attendance application leveraging NFC technology for seamless check-ins. Reduced data entry errors by 70%+ while providing real-time analytics and automated reporting capabilities.",
      tags: ["Kotlin", "Python", "Firebase"],
      icons: [SiKotlin, SiPython, SiFirebase],
      github: "https://github.com/skrt0215/AttendEase",
      highlight: "70%+ Error Reduction",
    },
    {
      title: "Gridiron Prophet",
      description:
        "Machine learning-powered NFL game prediction platform analyzing 34,000+ historical records. Advanced predictive modeling achieving 68.87% accuracy using comprehensive statistical analysis and data visualization.",
      tags: ["Python", "NumPy", "Pandas", "MySQL"],
      icons: [SiPython, SiNumpy, SiPandas, SiMysql],
      github: "https://github.com/skrt0215/gridiron-prophet",
      highlight: "68.87% Accuracy",
    },
  ];

  return (
    <section id="projects" style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div className="site-container" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2 style={{ fontSize: "2.75rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "16px" }}>
            My Showcase
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: "1.15rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Full-stack development, problem solving, and real-world impact
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "56px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeRise} whileHover={{ y: -4 }}>
              <div style={{ ...cardStyle, padding: "40px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    {project.icons.slice(0, 3).map((Icon, idx) => (
                      <span key={idx} style={{ fontSize: "32px", color: colors.textSecondary }}>
                        <Icon />
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      padding: "6px 16px",
                      background: colors.accentTint,
                      border: `1px solid ${colors.accentBorder}`,
                      borderRadius: "9999px",
                      color: colors.accent,
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {project.highlight}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "14px" }}>
                  {project.title}
                </h3>

                <p style={{ color: colors.textSecondary, fontSize: "16px", lineHeight: 1.75, marginBottom: "24px" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "6px 14px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: colors.textSecondary,
                        background: colors.surfaceAlt,
                        borderRadius: "9999px",
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.externalLink || project.github) && (
                  <div style={{ paddingTop: "20px", borderTop: `1px solid ${colors.border}` }}>
                    <motion.a
                      href={project.externalLink || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 24px",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "15px",
                        borderRadius: radius.sm,
                        background: colors.accent,
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentDark)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
                    >
                      {!project.externalLink && <FiGithub style={{ fontSize: "18px" }} />}
                      <span>{project.buttonText || "View Project"}</span>
                      <FiExternalLink style={{ fontSize: "16px", opacity: 0.8 }} />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center" }}
        >
          <motion.a
            href="https://github.com/skrt0215"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              border: `1px solid ${colors.accentBorder}`,
              color: colors.textPrimary,
              borderRadius: radius.sm,
              background: "transparent",
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentTint)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <FiGithub style={{ fontSize: "20px" }} />
            <span>View More Projects</span>
            <FiExternalLink style={{ fontSize: "18px", opacity: 0.7 }} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;