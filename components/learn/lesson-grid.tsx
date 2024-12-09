import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Music2, Star } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    id: 1,
    songId: "djougouya-magni",
    title: "Introduction to Folk Music",
    songTitle: "Djougouya Magni",
    description: "Learn the basics of folk music and its cultural significance",
    duration: "30 mins",
    difficulty: "Beginner",
    progress: 0,
  },
  {
    id: 2,
    songId: "sakura-sakura",
    title: "Basic Vocal Techniques",
    songTitle: "Sakura Sakura",
    description: "Master fundamental singing techniques for folk songs",
    duration: "45 mins",
    difficulty: "Beginner",
    progress: 0,
  },
  {
    id: 3,
    songId: "el-condor-pasa",
    title: "Understanding Rhythm",
    songTitle: "El Condor Pasa",
    description: "Explore common rhythmic patterns in folk music",
    duration: "40 mins",
    difficulty: "Intermediate",
    progress: 0,
  },
];

export function LessonGrid() {
  return (
    <div className="grid gap-6">
      {lessons.map((lesson) => (
        <Card key={lesson.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{lesson.title}</CardTitle>
                <Link
                  href={`/songs/${lesson.songId}`}
                  className="text-primary hover:underline mt-1 block"
                >
                  Featured Song: {lesson.songTitle}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {lesson.description}
                </p>
              </div>
              <Music2 className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {lesson.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1" />
                  {lesson.difficulty}
                </div>
              </div>
              <Button>Start Lesson</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
