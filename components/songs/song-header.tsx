"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Share2, BookmarkPlus } from "lucide-react";
import { Song } from "@/lib/types";

interface SongHeaderProps {
  song: Song;
}

export function SongHeader({ song }: SongHeaderProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{song.name}</h1>
            <p className="text-muted-foreground mt-1">
              {song.artist} • {song.category} • {song.subcategory}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button className="gap-2">
              <PlayCircle className="h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <BookmarkPlus className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <p className="mt-4 text-muted-foreground">
          {song.culturalContext}
        </p>
      </CardContent>
    </Card>
  );
}