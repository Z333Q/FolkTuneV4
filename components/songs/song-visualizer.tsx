"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Song } from "@/lib/types";

interface SongVisualizerProps {
  song: Song;
}

export function SongVisualizer({ song }: SongVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isPlayingRef = useRef(false);
  let startTime: number = 0;

  const animate = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw frequency bars
        const barWidth = 4;
        const gap = 2;
        const totalBars = Math.floor(canvas.width / (barWidth + gap));

        for (let i = 0; i < totalBars; i++) {
          const x = i * (barWidth + gap);
          const height =
            Math.abs(Math.sin(progress * 0.002 + i * 0.2)) *
            canvas.height *
            0.8;
          const y = (canvas.height - height) / 2;

          const gradient = ctx.createLinearGradient(x, y, x, y + height);
          gradient.addColorStop(0, "hsl(var(--primary))");
          gradient.addColorStop(1, "hsl(var(--primary) / 0.5)");

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth, height);
        }
      }
    }

    if (isPlayingRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const togglePlayback = () => {
    isPlayingRef.current = !isPlayingRef.current;

    if (isPlayingRef.current) {
      animationRef.current = requestAnimationFrame((timestamp) => {
        startTime = timestamp;
        animate(timestamp);
      });
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const resetVisualization = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    isPlayingRef.current = false;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Song Visualization</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={togglePlayback}>
              {isPlayingRef.current ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button variant="outline" size="icon" onClick={resetVisualization}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <canvas
          ref={canvasRef}
          className="w-full h-[200px] bg-muted rounded-lg"
        />
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="font-medium">Tempo</div>
            <div>{song.tempo || 120} BPM</div>
          </div>
          <div className="text-center">
            <div className="font-medium">Key</div>
            <div>{song.key || "C Major"}</div>
          </div>
          <div className="text-center">
            <div className="font-medium">Duration</div>
            <div>{song.duration || "3:45"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
