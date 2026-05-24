"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiDownload } from "react-icons/fi";
import { colors, radius, cardStyle, fadeRise, stagger, RESUME_PATH } from "@/lib/theme";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = {
    email: "stekurt215@gmail.com",
    phone: "(631) 579-5288",
    location: "Relocating to Charlotte, NC",
    github: "https://github.com/skrt0215",
    linkedin: "https://www.linkedin.com/in/stevenk1998",
  };

  const contactCards = [
    { title: "Email", value: contactInfo.email, icon: HiMail, href: `mailto:${contactInfo.email}` },
    { title: "Phone", value: contactInfo.phone, icon: HiPhone, href: `tel:${contactInfo.phone}` },
    { title: "Location", value: contactInfo.location, icon: HiLocationMarker, href: null },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FiGithub, url: contactInfo.github, description: "View my code" },
    { name: "LinkedIn", icon: FiLinkedin, url: contactInfo.linkedin, description: "Connect with me" },
    { name: "Email", icon: FiMail, url: `mailto:${contactInfo.email}`, description: "Send a message" },
  ];

  return (
    <section id="contact" style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <div className="site-container" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2 style={{ fontSize: "2.75rem", fontWeight: 700, color: colors.textPrimary, marginBottom: "16px" }}>
            Connect with me
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: "1.15rem", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "48px", maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}
        >
          {contactCards.map((card) => {
            const Icon = card.icon;
            const CardWrapper = card.href ? motion.a : motion.div;
            return (
              <CardWrapper
                key={card.title}
                href={card.href || undefined}
                variants={fadeRise}
                whileHover={{ y: -4 }}
                style={{ ...cardStyle, padding: "28px", textDecoration: "none", cursor: card.href ? "pointer" : "default" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: colors.accentTint,
                    border: `1px solid ${colors.accentBorder}`,
                    borderRadius: radius.md,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon style={{ fontSize: "24px", color: colors.accent }} />
                </div>
                <p style={{ color: colors.textSecondary, fontSize: "12px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                  {card.title}
                </p>
                <p style={{ color: colors.textPrimary, fontSize: "17px", fontWeight: 600, wordBreak: "break-word" }}>{card.value}</p>
              </CardWrapper>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto", marginBottom: "48px" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  style={{ ...cardStyle, padding: "20px", textDecoration: "none", display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: colors.accentTint,
                      border: `1px solid ${colors.accentBorder}`,
                      borderRadius: radius.sm,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ fontSize: "22px", color: colors.accent }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <h4 style={{ color: colors.textPrimary, fontSize: "15px", fontWeight: 600 }}>{link.name}</h4>
                      <FiExternalLink style={{ fontSize: "13px", color: colors.textSecondary }} />
                    </div>
                    <p style={{ color: colors.textSecondary, fontSize: "13px" }}>{link.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ textAlign: "center", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}
        >
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: colors.accent,
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: radius.sm,
              border: "none",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
          >
            Start a Conversation
          </motion.a>

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
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentTint)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <FiDownload style={{ fontSize: "18px" }} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;