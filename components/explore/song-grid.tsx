import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music2, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { featuredSongs } from "@/lib/songs";

export function SongGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
      {featuredSongs.map((song) => (
        <Card key={song.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <Link 
                  href={`/songs/${song.id}`}
                  className="hover:text-primary transition-colors"
                >
                  <CardTitle className="text-lg">{song.name}</CardTitle>
                </Link>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{song.country}</Badge>
                  <Badge variant="outline">{song.subcategory}</Badge>
                </div>
              </div>
              <Music2 className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Cultural Context</div>
                <p className="text-sm text-muted-foreground">{song.culturalContext}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a 
                    href={song.spotifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Listen on Spotify
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a 
                    href={song.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}