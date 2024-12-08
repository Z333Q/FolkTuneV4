import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Star, Music } from "lucide-react";

const topContributors = [
  {
    name: "Elena Rodriguez",
    image: "https://i.pravatar.cc/150?u=tc1",
    contributions: 156,
    specialization: "Latin American Folk",
  },
  {
    name: "Amir Khan",
    image: "https://i.pravatar.cc/150?u=tc2",
    contributions: 142,
    specialization: "Classical Indian",
  },
  {
    name: "Lisa Chen",
    image: "https://i.pravatar.cc/150?u=tc3",
    contributions: 128,
    specialization: "East Asian Folk",
  },
  {
    name: "Omar Hassan",
    image: "https://i.pravatar.cc/150?u=tc4",
    contributions: 115,
    specialization: "Middle Eastern",
  },
  {
    name: "Nina Petrova",
    image: "https://i.pravatar.cc/150?u=tc5",
    contributions: 98,
    specialization: "Slavic Folk",
  },
];

export function TopContributors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topContributors.map((contributor, index) => (
            <div
              key={contributor.name}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar>
                <AvatarImage src={contributor.image} alt={contributor.name} />
                <AvatarFallback>{contributor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{contributor.name}</div>
                <div className="text-sm text-muted-foreground">
                  {contributor.specialization}
                </div>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                <div className="font-medium">{contributor.contributions}</div>
                <div>contributions</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}