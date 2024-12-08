import { MusicIcon } from "lucide-react";

export function ExploreHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <MusicIcon className="h-8 w-8" />
        <h1 className="text-3xl font-bold tracking-tight">Explore Folk Songs</h1>
      </div>
      <p className="text-muted-foreground">
        Discover traditional folk songs from around the world, learn about their cultural significance,
        and explore the rich heritage of global music.
      </p>
    </div>
  );
}