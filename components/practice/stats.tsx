import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Music, Star, Trophy } from "lucide-react";

const stats = [
  {
    title: "Practice Time",
    value: "12h 30m",
    icon: Clock,
  },
  {
    title: "Songs Learned",
    value: "15",
    icon: Music,
  },
  {
    title: "Average Score",
    value: "85%",
    icon: Star,
  },
  {
    title: "Achievements",
    value: "8",
    icon: Trophy,
  },
];

export function PracticeStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center p-4 bg-muted rounded-lg">
              <stat.icon className="h-5 w-5 mb-2 text-primary" />
              <div className="text-sm font-medium">{stat.title}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}