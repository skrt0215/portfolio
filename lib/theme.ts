export const colors = {
  bg: "#0E1116",
  bgAlt: "#14181F",
  surface: "#1A1F28",
  surfaceAlt: "#161B22",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.14)",
  textPrimary: "#E8EAED",
  textSecondary: "#9AA0A8",
  accent: "#2E6FB8",
  accentDark: "#1F3A5F",
  accentTint: "rgba(46, 111, 184, 0.12)",
  accentBorder: "rgba(46, 111, 184, 0.4)",
} as const;

export const radius = {
  sm: "10px",
  md: "14px",
  lg: "18px",
} as const;

export const softShadow = "0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.25)";

export const cardStyle = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radius.lg,
  boxShadow: softShadow,
} as const;

export const fadeRise = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export const RESUME_PATH = "/Steven_Kurt_Resume.pdf";