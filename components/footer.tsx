import { MusicIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="/about" 
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="/privacy" 
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link 
            href="/terms" 
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <MusicIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              &copy; {new Date().getFullYear()} FolkTune. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}