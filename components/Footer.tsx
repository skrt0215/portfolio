"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { colors, radius } from "@/lib/theme";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ borderTop: `1px solid ${colors.border}`, position: "relative" }}>
      <div
        style={{
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "48px",
          paddingBottom: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-roboto-mono), monospace", color: colors.textSecondary, fontSize: "14px" }}>
          <span>&copy; {currentYear}</span>
          <span style={{ color: colors.textPrimary, fontWeight: 600 }}>Steven Kurt</span>
        </div>

        <p style={{ fontSize: "13px", color: colors.textSecondary }}>
          Built with Next.js, React &amp; Framer Motion
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            background: "transparent",
            border: `1px solid ${colors.border}`,
            borderRadius: radius.sm,
            color: colors.textPrimary,
            fontWeight: 500,
            fontSize: "14px",
            cursor: "pointer",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.accentBorder)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = colors.border)}
        >
          <span>Back to Top</span>
          <FiArrowUp style={{ fontSize: "16px" }} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;