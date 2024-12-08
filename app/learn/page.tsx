import { LearnHeader } from "@/components/learn/header";
import { LessonGrid } from "@/components/learn/lesson-grid";
import { ProgressTracker } from "@/components/learn/progress-tracker";

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <LearnHeader />
      <div className="grid gap-8 md:grid-cols-12 mt-8">
        <div className="md:col-span-8">
          <LessonGrid />
        </div>
        <div className="md:col-span-4">
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
}