"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Song } from "@/lib/types";

interface LyricsDisplayProps {
  song: Song;
}

export function LyricsDisplay({ song }: LyricsDisplayProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Lyrics</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? "Show Original" : "Show Translation"}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-lg leading-relaxed whitespace-pre-line">
            {showTranslation ? song.lyricsTranslation : song.lyrics}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}