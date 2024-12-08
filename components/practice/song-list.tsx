import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { practiceSongs } from "@/lib/songs";

export function PracticeSongList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Songs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {practiceSongs.map((song) => (
            <div
              key={song.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Link 
                    href={`/songs/${song.id}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {song.title}
                  </Link>
                  <Badge variant="secondary">{song.difficulty}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {song.artist} • {song.origin}
                </p>
                <p className="text-sm text-muted-foreground">{song.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">{song.duration}</div>
                <Button size="sm" variant="ghost">
                  <PlayCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}