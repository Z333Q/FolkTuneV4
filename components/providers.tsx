"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}