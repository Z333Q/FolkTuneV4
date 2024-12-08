import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Share2, Download } from "lucide-react";

const recordings = [
  {
    id: 1,
    songName: "Scarborough Fair",
    date: "2024-03-20",
    duration: "3:24",
    score: 85,
  },
  {
    id: 2,
    songName: "Danny Boy",
    date: "2024-03-19",
    duration: "4:12",
    score: 92,
  },
  {
    id: 3,
    songName: "Sakura Sakura",
    date: "2024-03-18",
    duration: "2:45",
    score: 78,
  },
];

export function RecordingsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Recordings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {recordings.map((recording) => (
            <div
              key={recording.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
            >
              <div className="space-y-1">
                <h3 className="font-medium">{recording.songName}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(recording.date).toLocaleDateString()} • {recording.duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium text-primary">
                  Score: {recording.score}%
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}