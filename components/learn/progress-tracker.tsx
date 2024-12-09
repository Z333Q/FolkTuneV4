
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock } from "lucide-react";

// Placeholder data for demo purposes
const progress = {
  lessonsCompleted: 5,
  totalLessons: 12,
  hoursSpent: "8h 45m",
  currentStreak: 7,
};

export function ProgressTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">Course Progress</div>
            <div className="text-sm text-muted-foreground">
              {progress.lessonsCompleted}/{progress.totalLessons} lessons
            </div>
          </div>
          <Progress value={(progress.lessonsCompleted / progress.totalLessons) * 100 || 0} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
            <Clock className="h-5 w-5 mb-2 text-primary" />
            <div className="text-sm font-medium">Time Spent</div>
            <div className="text-2xl font-bold">{progress.hoursSpent}</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
            <Award className="h-5 w-5 mb-2 text-primary" />
            <div className="text-sm font-medium">Current Streak</div>
            <div className="text-2xl font-bold">{progress.currentStreak} days</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
