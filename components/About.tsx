"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaBrain, FaChartLine } from "react-icons/fa";
import { colors, radius, cardStyle, fadeRise, stagger } from "@/lib/theme";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: FaCode,
      title: "Full-Stack Developer",
      description: "Building scalable web applications",
    },
    {
      icon: FaBrain,
      title: "AI Integration",
      description: "LLM-powered features, automation, and observability",
    },
    {
      icon: FaChartLine,
      title: "Data-Driven",
      description: "ML models & analytics solutions",
    },
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "4", label: "Projects" },
    { value: "40+", label: "Platform Users" },
  ];

  return (
    <section
      id="about"
      style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}
    >
      <div className="site-container" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: "48px" }}
        >
          <motion.div variants={fadeRise} style={{ position: "relative", maxWidth: "440px", marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ ...cardStyle, padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div
                style={{
                  width: "168px",
                  height: "168px",
                  marginBottom: "20px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `2px solid ${colors.accentBorder}`,
                }}
              >
                <img
                    src="/headshot.png"
                    alt="Steven Kurt"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 20%",
                        transform: "scale(1.8)",
                    }}
                    />
              </div>
              <p style={{ color: colors.textSecondary, fontSize: "14px", marginBottom: "24px", letterSpacing: "0.5px" }}>
                Software Engineer
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", width: "100%" }}>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "16px 8px",
                      background: colors.surfaceAlt,
                      border: `1px solid ${colors.border}`,
                      borderRadius: radius.md,
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "1.6rem", fontWeight: 700, color: colors.accent }}>{stat.value}</p>
                    <p style={{ color: colors.textSecondary, fontSize: "12px", marginTop: "4px" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRise} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: colors.textPrimary }}>Who I Am</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", color: colors.textSecondary, fontSize: "18px", lineHeight: 1.8 }}>
              <p>
                <span style={{ color: colors.textPrimary, fontWeight: 600 }}>Computer Science graduate</span> from{" "}
                <span style={{ color: colors.accent, fontWeight: 600 }}>New York Institute of Technology</span> with hands-on experience building production applications in{" "}
                <span style={{ color: colors.textPrimary, fontWeight: 600 }}>React, Python, and Firebase</span>.
              </p>
              <p>
                I combine software development skills with operations expertise to deliver{" "}
                <span style={{ color: colors.accent, fontWeight: 600 }}>data-driven solutions</span> that improve efficiency and solve real-world problems. My background in operations management gives me a unique perspective on building systems that actually work in production environments.
              </p>
              <p>
                From mobile attendance solutions reducing data entry errors by <span style={{ color: colors.textPrimary, fontWeight: 600 }}>70%+</span> to multi-tenant platforms built for real-world operations, I create full-stack applications that make a measurable impact.
              </p>
              <p>
                Whether it&apos;s architecting an <span style={{ color: colors.accent, fontWeight: 600 }}>LLM-powered dispatch pipeline</span> or migrating a production database to <span style={{ color: colors.accent, fontWeight: 600 }}>Azure</span> without data loss, I bring the same precision and ownership to every system I build.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "8px" }}>
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    whileHover={{ y: -4 }}
                    style={{ ...cardStyle, padding: "20px" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: colors.accentTint,
                        border: `1px solid ${colors.accentBorder}`,
                        borderRadius: radius.sm,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <Icon style={{ fontSize: "18px", color: colors.accent }} />
                    </div>
                    <h4 style={{ color: colors.textPrimary, fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>
                      {highlight.title}
                    </h4>
                    <p style={{ color: colors.textSecondary, fontSize: "13px", lineHeight: 1.5 }}>
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;