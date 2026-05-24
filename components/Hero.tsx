"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { colors, radius, RESUME_PATH } from "@/lib/theme";

const Hero = () => {
  const handleViewWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/skrt0215", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/stevenk1998", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:stekurt215@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: colors.accent,
              fontSize: "16px",
              fontFamily: "var(--font-roboto-mono), monospace",
              letterSpacing: "2px",
            }}
          >
            Hello, I&apos;m
          </p>

          <h1
            style={{
              fontSize: "clamp(2.75rem, 9vw, 5.5rem)",
              fontWeight: 700,
              color: colors.textPrimary,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Steven Kurt
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 3vw, 1.4rem)",
              color: colors.textPrimary,
              fontWeight: 500,
            }}
          >
            Full-Stack Developer
            {" "}<span style={{ color: colors.textSecondary }}>|</span>{" "}
            Builder
            {" "}<span style={{ color: colors.textSecondary }}>|</span>{" "}
            Problem Solver
          </p>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: colors.accentTint,
              border: `1px solid ${colors.accentBorder}`,
              color: colors.textPrimary,
              fontSize: "13px",
              fontFamily: "var(--font-roboto-mono), monospace",
              letterSpacing: "0.5px",
            }}
          >
            Relocating to Charlotte, NC | September 2026
          </span>

          <p
            style={{
              color: colors.textSecondary,
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            Building scalable, production-grade software from first line of code to deployed system.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "4px" }}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: radius.sm,
                    color: colors.textSecondary,
                    fontSize: "20px",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  aria-label={link.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <motion.button
              onClick={handleViewWork}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "14px 32px",
                background: colors.accent,
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: radius.sm,
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentDark)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
            >
              View My Work
            </motion.button>

            <motion.a
              href={RESUME_PATH}
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                background: "transparent",
                color: colors.textPrimary,
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: radius.sm,
                border: `1px solid ${colors.accentBorder}`,
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentTint)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <FiDownload style={{ fontSize: "18px" }} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;