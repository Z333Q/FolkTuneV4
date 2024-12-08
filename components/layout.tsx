"use client";

import { ThemeProvider } from "next-themes";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}