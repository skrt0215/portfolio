"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { colors, radius } from "@/lib/theme";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: isScrolled ? "rgba(14, 17, 22, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled ? `1px solid ${colors.border}` : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", paddingLeft: "16px", paddingRight: "16px" }}>
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              whileHover={{ scale: 1.03 }}
              style={{ fontSize: "22px", fontWeight: 700, color: colors.accent, textDecoration: "none", letterSpacing: "1px", cursor: "pointer" }}
            >
              SK
            </motion.a>

            <div style={{ alignItems: "center", gap: "4px" }} className="hidden md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    padding: "8px 14px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: colors.textSecondary,
                    textDecoration: "none",
                    borderRadius: radius.sm,
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.textPrimary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.textSecondary)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                style={{
                  marginLeft: "12px",
                  padding: "9px 20px",
                  background: colors.accent,
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: radius.sm,
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = colors.accentDark)}
                onMouseLeave={(e) => (e.currentTarget.style.background = colors.accent)}
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                fontSize: "26px",
                color: colors.textPrimary,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                zIndex: 60,
                position: "relative",
              }}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)", zIndex: 40 }}
              className="md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                top: "84px",
                right: "16px",
                width: "260px",
                maxWidth: "calc(100vw - 32px)",
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: radius.lg,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5)",
                zIndex: 50,
                overflow: "hidden",
                padding: "12px",
              }}
              className="md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    marginBottom: "2px",
                    color: colors.textSecondary,
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    borderRadius: radius.sm,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.textPrimary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.textSecondary)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "8px",
                  padding: "12px",
                  background: colors.accent,
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  borderRadius: radius.sm,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;