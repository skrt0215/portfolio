"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiOfficeBuilding, HiChevronDown } from "react-icons/hi";
import { colors, radius, cardStyle, fadeRise, stagger } from "@/lib/theme";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Operations Manager",
      company: "Strategic Security Corp",
      period: "Dec 2024 - Present",
      location: "New York, NY",
      description: "Leading operations and technical platform delivery for the organization.",
      responsibilities: [
        "Designed, built, and deployed OVERWATCH, a production operations platform that unified four external systems into one dashboard and was adopted across the organization",
        "Coordinated executive protection during the 2025 Presidential Inauguration by directing logistics with cross-agency teams in a high-pressure environment",
        "Coordinated operations with DoD military bases by applying federal compliance protocols, improving compliance and organizational readiness",
        "Designed scalable project management workflows by implementing performance-tracking tools, streamlining federal contract delivery and oversight",
      ],
      badge: "Current",
    },
    {
      title: "Operations Analyst",
      company: "Strategic Security Corp",
      period: "Dec 2022 - Dec 2024",
      location: "New York, NY",
      description: "Drove operational efficiency through data analysis and process optimization.",
      responsibilities: [
        "Analyzed staffing trends using workforce data models and scheduling tools, resulting in a 20% reduction in overtime costs and improved allocation of personnel across high-demand sites",
        "Aligned staffing efforts with HR and site managers using compliance frameworks and proactive communication, leading to stronger workforce alignment and reduced scheduling conflicts",
        "Introduced KPI dashboard reports using Excel automation and internal reporting tools, enabling real-time visibility into performance metrics and faster executive decision-making",
      ],
      badge: "2 Years",
    },
  ];

  return (
    <section id="experience" style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div className="site-container" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2 style={{ fontSize: "2.75rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "16px" }}>
            Professional Journey
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: "1.15rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            From operations to technology — a path of continuous growth and impact
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeRise}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                style={{ ...cardStyle, padding: "28px", cursor: "pointer" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: colors.textPrimary }}>{exp.title}</h3>
                    <span
                      style={{
                        padding: "3px 12px",
                        borderRadius: "9999px",
                        background: colors.accentTint,
                        border: `1px solid ${colors.accentBorder}`,
                        color: colors.accent,
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ fontSize: "1.3rem", color: colors.textSecondary }}>
                    <HiChevronDown />
                  </motion.div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: colors.accent, marginBottom: "8px" }}>
                  <HiOfficeBuilding style={{ fontSize: "16px" }} />
                  <span style={{ fontWeight: 600, fontSize: "15px" }}>{exp.company}</span>
                </div>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "12px" }}>
                  <p style={{ color: colors.textSecondary, fontSize: "13px" }}>{exp.period}</p>
                  <p style={{ color: colors.textSecondary, fontSize: "13px" }}>{exp.location}</p>
                </div>

                <p style={{ color: colors.textSecondary, lineHeight: 1.6, marginBottom: "4px" }}>{exp.description}</p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ paddingTop: "16px", marginTop: "12px", borderTop: `1px solid ${colors.border}` }}>
                    <h4 style={{ color: colors.textPrimary, fontWeight: 600, marginBottom: "12px", fontSize: "15px" }}>
                      Key Achievements
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} style={{ color: colors.textSecondary, fontSize: "14px", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.6 }}>
                          <span style={{ color: colors.accent, marginTop: "2px" }}>▹</span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto", marginTop: "32px" }}
        >
          <div style={{ ...cardStyle, padding: "32px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "20px" }}>Education</h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 600, color: colors.accent, marginBottom: "6px" }}>
                  BSc. Computer Science
                </h4>
                <p style={{ color: colors.textSecondary, fontSize: "15px" }}>New York Institute of Technology</p>
              </div>
              <span
                style={{
                  padding: "6px 14px",
                  background: colors.accentTint,
                  border: `1px solid ${colors.accentBorder}`,
                  borderRadius: radius.sm,
                  color: colors.accent,
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Jan 2022 - May 2026
              </span>
            </div>
            <div style={{ paddingTop: "16px", borderTop: `1px solid ${colors.border}` }}>
              <p style={{ fontSize: "13px", color: colors.textSecondary, marginBottom: "12px", fontWeight: 600 }}>Key Coursework</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Operating Systems", "Database Management", "Computer Networks", "Data Structures", "Algorithms"].map((course) => (
                  <span
                    key={course}
                    style={{
                      padding: "5px 12px",
                      fontSize: "12px",
                      background: colors.surfaceAlt,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "9999px",
                      color: colors.textSecondary,
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;