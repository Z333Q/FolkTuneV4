
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function LearnHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learn Folk Songs</h1>
        <p className="text-muted-foreground mt-2">
          Master traditional songs with step-by-step guidance and cultural insights
        </p>
      </div>
      <Button className="w-full md:w-auto" size="lg">
        <BookOpen className="mr-2 h-5 w-5" />
        Start New Lesson
      </Button>
    </div>
  );
}
