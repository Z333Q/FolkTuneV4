import { Button } from "@/components/ui/button";
import { MusicIcon } from "lucide-react";

export function PracticeHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Practice Mode</h1>
        <p className="text-muted-foreground mt-2">
          Perfect your singing with real-time feedback and guidance
        </p>
      </div>
      <Button className="w-full md:w-auto" size="lg">
        <MusicIcon className="mr-2 h-5 w-5" />
        Start New Session
      </Button>
    </div>
  );
}