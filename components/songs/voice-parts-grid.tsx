"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Song } from "@/lib/types";

interface VoicePartsGridProps {
  song: Song;
}

export function VoicePartsGrid({ song }: VoicePartsGridProps) {
  const [activeVoices, setActiveVoices] = useState({
    high: true,
    mid: true,
    bass: true,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVoice = (voice: keyof typeof activeVoices) => {
    setActiveVoices(prev => ({
      ...prev,
      [voice]: !prev[voice]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Voice Parts</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 mr-2" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            {isPlaying ? "Pause" : "Play All"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Parts</TabsTrigger>
            <TabsTrigger value="high">High Voice</TabsTrigger>
            <TabsTrigger value="mid">Mid Voice</TabsTrigger>
            <TabsTrigger value="bass">Bass Voice</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(["high", "mid", "bass"] as const).map((part) => (
                <div key={part} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium capitalize">{part} Voice</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleVoice(part)}
                    >
                      {activeVoices[part] ? (
                        <Volume2 className="h-4 w-4" />
                      ) : (
                        <VolumeX className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <div className={`h-[100px] bg-background rounded border relative overflow-hidden ${
                    !activeVoices[part] && "opacity-50"
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1 bg-primary/20">
                        <div 
                          className="h-full bg-primary transition-all duration-300"
                          style={{
                            width: isPlaying ? "100%" : "0%",
                            transition: isPlaying ? "width 20s linear" : "none"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {(["high", "mid", "bass"] as const).map((part) => (
            <TabsContent key={part} value={part} className="mt-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium capitalize">{part} Voice</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleVoice(part)}
                  >
                    {activeVoices[part] ? (
                      <Volume2 className="h-4 w-4" />
                    ) : (
                      <VolumeX className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className={`h-[200px] bg-background rounded border relative overflow-hidden ${
                  !activeVoices[part] && "opacity-50"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-2 bg-primary/20">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                          width: isPlaying ? "100%" : "0%",
                          transition: isPlaying ? "width 20s linear" : "none"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}