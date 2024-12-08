import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Music, Star, Award } from "lucide-react";

const activities = [
  {
    id: 1,
    user: {
      name: "Sofia Chen",
      image: "https://i.pravatar.cc/150?u=ac1",
    },
    action: "learned",
    song: "Sakura Sakura",
    category: "Asian Folk",
    time: "2 hours ago",
    type: "song",
  },
  {
    id: 2,
    user: {
      name: "Ahmed Hassan",
      image: "https://i.pravatar.cc/150?u=ac2",
    },
    action: "achieved",
    achievement: "Master of African Rhythms",
    category: "Achievement",
    time: "4 hours ago",
    type: "achievement",
  },
  {
    id: 3,
    user: {
      name: "Maria Garcia",
      image: "https://i.pravatar.cc/150?u=ac3",
    },
    action: "mastered",
    song: "El Condor Pasa",
    category: "South American Folk",
    time: "6 hours ago",
    type: "mastery",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar>
                <AvatarImage src={activity.user.image} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="text-muted-foreground">{activity.action}</span>
                  {activity.type === "song" && (
                    <>
                      <Music className="h-4 w-4 text-primary" />
                      <span className="font-medium">{activity.song}</span>
                    </>
                  )}
                  {activity.type === "achievement" && (
                    <>
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">{activity.achievement}</span>
                    </>
                  )}
                  {activity.type === "mastery" && (
                    <>
                      <Star className="h-4 w-4 text-primary" />
                      <span className="font-medium">{activity.song}</span>
                    </>
                  )}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <span>{activity.category}</span>
                  {" • "}
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}