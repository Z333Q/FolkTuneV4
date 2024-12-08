import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Music } from "lucide-react";

const topUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "https://i.pravatar.cc/150?u=1",
    score: 2450,
    songs: 48,
  },
  {
    id: 2,
    name: "Michael Kim",
    image: "https://i.pravatar.cc/150?u=2",
    score: 2280,
    songs: 42,
  },
  {
    id: 3,
    name: "Emma Singh",
    image: "https://i.pravatar.cc/150?u=3",
    score: 2150,
    songs: 39,
  },
  {
    id: 4,
    name: "David Lee",
    image: "https://i.pravatar.cc/150?u=4",
    score: 1980,
    songs: 35,
  },
  {
    id: 5,
    name: "Maria Garcia",
    image: "https://i.pravatar.cc/150?u=5",
    score: 1850,
    songs: 32,
  },
];

export function CommunitySection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topUsers.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="font-medium text-muted-foreground w-6">
                  #{index + 1}
                </div>
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" /> {user.score} points
                    </span>
                    {" • "}
                    <span className="inline-flex items-center gap-1">
                      <Music className="h-3 w-3" /> {user.songs} songs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}