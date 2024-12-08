import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Music } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categoryLeaders = {
  "African": [
    { name: "Kwame Mensah", country: "Ghana", score: 2450, image: "https://i.pravatar.cc/150?u=af1" },
    { name: "Amara Okafor", country: "Nigeria", score: 2280, image: "https://i.pravatar.cc/150?u=af2" },
    { name: "Fatima El-Amin", country: "Sudan", score: 2150, image: "https://i.pravatar.cc/150?u=af3" },
    { name: "Zainab Diallo", country: "Senegal", score: 1980, image: "https://i.pravatar.cc/150?u=af4" },
    { name: "Malik Toure", country: "Mali", score: 1850, image: "https://i.pravatar.cc/150?u=af5" },
  ],
  "Asian": [
    { name: "Mei Zhang", country: "China", score: 2380, image: "https://i.pravatar.cc/150?u=as1" },
    { name: "Raj Patel", country: "India", score: 2250, image: "https://i.pravatar.cc/150?u=as2" },
    { name: "Yuki Tanaka", country: "Japan", score: 2120, image: "https://i.pravatar.cc/150?u=as3" },
    { name: "Min-ji Kim", country: "Korea", score: 1950, image: "https://i.pravatar.cc/150?u=as4" },
    { name: "Anh Nguyen", country: "Vietnam", score: 1820, image: "https://i.pravatar.cc/150?u=as5" },
  ],
  "European": [
    { name: "Sofia Popov", country: "Russia", score: 2400, image: "https://i.pravatar.cc/150?u=eu1" },
    { name: "Marco Rossi", country: "Italy", score: 2270, image: "https://i.pravatar.cc/150?u=eu2" },
    { name: "Elise Dubois", country: "France", score: 2140, image: "https://i.pravatar.cc/150?u=eu3" },
    { name: "Lars Nielsen", country: "Denmark", score: 1970, image: "https://i.pravatar.cc/150?u=eu4" },
    { name: "Ana Silva", country: "Portugal", score: 1840, image: "https://i.pravatar.cc/150?u=eu5" },
  ],
  "Americas": [
    { name: "Isabella Santos", country: "Brazil", score: 2420, image: "https://i.pravatar.cc/150?u=am1" },
    { name: "Miguel Torres", country: "Mexico", score: 2290, image: "https://i.pravatar.cc/150?u=am2" },
    { name: "John RedFeather", country: "USA", score: 2160, image: "https://i.pravatar.cc/150?u=am3" },
    { name: "Carmen Ortiz", country: "Argentina", score: 1990, image: "https://i.pravatar.cc/150?u=am4" },
    { name: "Luis Morales", country: "Peru", score: 1860, image: "https://i.pravatar.cc/150?u=am5" },
  ],
  "Oceania": [
    { name: "Aroha Williams", country: "New Zealand", score: 2350, image: "https://i.pravatar.cc/150?u=oc1" },
    { name: "Jack Thompson", country: "Australia", score: 2220, image: "https://i.pravatar.cc/150?u=oc2" },
    { name: "Leilani Tonga", country: "Tonga", score: 2090, image: "https://i.pravatar.cc/150?u=oc3" },
    { name: "Koa Kalani", country: "Hawaii", score: 1920, image: "https://i.pravatar.cc/150?u=oc4" },
    { name: "Moana Viti", country: "Fiji", score: 1790, image: "https://i.pravatar.cc/150?u=oc5" },
  ],
};

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Global Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="African" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="African">AF</TabsTrigger>
            <TabsTrigger value="Asian">AS</TabsTrigger>
            <TabsTrigger value="European">EU</TabsTrigger>
            <TabsTrigger value="Americas">AM</TabsTrigger>
            <TabsTrigger value="Oceania">OC</TabsTrigger>
          </TabsList>
          {Object.entries(categoryLeaders).map(([category, leaders]) => (
            <TabsContent key={category} value={category} className="space-y-4">
              {leaders.map((user, index) => (
                <div
                  key={user.name}
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
                        <span>{user.country}</span>
                        {" • "}
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3" /> {user.score} points
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}