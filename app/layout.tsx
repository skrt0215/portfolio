import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Steven Kurt | Software Engineer",
  description: "Portfolio of Steven Kurt, a Computer Science graduate and full-stack developer who builds and ships production software.",
  keywords: ["Steven Kurt", "Software Engineer", "Software Developer", "Implementation Engineer", "Full-Stack Developer", "FastAPI", "AI Integration", "React", "Next.js", "Python", "Java"],
  authors: [{ name: "Steven Kurt" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Steven Kurt | Software Engineer",
    description: "Portfolio of Steven Kurt, a Computer Science graduate and full-stack developer who builds and ships production software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}