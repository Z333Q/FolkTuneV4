import { Button } from "@/components/ui/button";
import { MusicIcon, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground">
              Preserve and share folk music from around the world.{" "}
              <a href="/about" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learn Folk Songs from Around the World
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover, learn, and preserve traditional folk songs with advanced AI-powered feedback. Join our global community of music enthusiasts and cultural preservationists.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <MusicIcon className="h-5 w-5" />
              Explore Songs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}