import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-none shadow-none bg-background">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            About FolkTune
          </CardTitle>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Preserving and celebrating the world's musical heritage through technology and community
          </p>
        </CardHeader>
        <CardContent className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              FolkTune is dedicated to preserving and promoting folk music traditions from around the world. 
              We believe that folk music is a vital part of our global cultural heritage and should be 
              accessible to everyone who wants to learn and appreciate it.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What We Offer</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Comprehensive Learning Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step lessons for learning folk songs from different cultures, with personalized 
                  feedback and progress tracking.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Cultural Context</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed information about the history and significance of each song, helping you 
                  understand the cultural background.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Advanced Technology</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered feedback to help you improve your singing, with real-time analysis of pitch, 
                  rhythm, and pronunciation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Global Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with other folk music enthusiasts worldwide, share your progress, and participate 
                  in cultural exchange.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Technology</h2>
            <p className="text-muted-foreground leading-relaxed">
              FolkTune uses advanced audio processing technology to provide real-time feedback on pitch, 
              rhythm, and pronunciation. Our system is designed to help you learn traditional singing 
              styles authentically while making the learning process engaging and effective.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              We'd love to hear from you! For any questions, suggestions, or feedback, please email us at:{" "}
              <a 
                href="mailto:hello@folktune.app" 
                className="text-primary hover:underline"
              >
                hello@folktune.app
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}