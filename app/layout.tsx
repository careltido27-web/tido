import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIDO Counter",
  description: "Compteur interactif Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <header className="header">
          <h1>TIDO Counter</h1>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <p>© 2025 TIDO - Compteur interactif</p>
        </footer>
      </body>
    </html>
  );
}