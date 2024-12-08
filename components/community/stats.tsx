import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Music, Globe, Trophy } from "lucide-react";

const stats = [
  {
    title: "Active Members",
    value: "2,845",
    icon: Users,
  },
  {
    title: "Songs Learned",
    value: "12,458",
    icon: Music,
  },
  {
    title: "Countries",
    value: "156",
    icon: Globe,
  },
  {
    title: "Achievements",
    value: "5,234",
    icon: Trophy,
  },
];

export function CommunityStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
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