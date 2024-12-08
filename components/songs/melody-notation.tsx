"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack } from "lucide-react";
import { useState, useRef } from "react";
import { Song } from "@/lib/types";

interface MelodyNotationProps {
  song: Song;
}

export function MelodyNotation({ song }: MelodyNotationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentBeat(prev => (prev + 1) % 16);
      }, (60 / (song.tempo || 120)) * 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const resetPlayback = () => {
    setIsPlaying(false);
    setCurrentBeat(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Melody Notation</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlayback}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={resetPlayback}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="h-[200px] bg-background rounded border relative">
              <div className="absolute inset-0 grid grid-cols-16 gap-px">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`relative ${
                      i === currentBeat ? "bg-primary/20" : ""
                    }`}
                  >
                    {i % 4 === 0 && (
                      <div className="absolute top-0 bottom-0 w-px bg-border" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Tempo</h3>
              <p className="text-2xl font-bold">{song.tempo || "120"} BPM</p>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Key</h3>
              <p className="text-2xl font-bold">{song.key || "C Major"}</p>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Time Signature</h3>
              <p className="text-2xl font-bold">{song.timeSignature || "4/4"}</p>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-medium mb-2">Duration</h3>
              <p className="text-2xl font-bold">{song.duration || "3:45"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}