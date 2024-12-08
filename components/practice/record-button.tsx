"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Square } from "lucide-react";
import { cn } from "@/lib/utils";

export function RecordButton() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual recording logic
  };

  return (
    <Button
      size="lg"
      variant={isRecording ? "destructive" : "default"}
      onClick={toggleRecording}
      className={cn(
        "transition-all duration-200",
        isRecording && "animate-pulse"
      )}
    >
      {isRecording ? (
        <>
          <Square className="mr-2 h-5 w-5" />
          Stop Recording
        </>
      ) : (
        <>
          <Mic className="mr-2 h-5 w-5" />
          Start Recording
        </>
      )}
    </Button>
  );
}