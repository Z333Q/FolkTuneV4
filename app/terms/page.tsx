import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-none shadow-none bg-background">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Terms of Service
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using FolkTune, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Content and Copyright</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content provided through FolkTune, including but not limited to songs, recordings, 
              lessons, and cultural information, is protected by copyright and other intellectual 
              property rights.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the service for any unlawful purpose</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to access other users' accounts</li>
              <li>Interfere with the proper functioning of the service</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your account at our discretion, without 
              notice, for conduct that we believe violates these Terms of Service or is harmful to 
              other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through the service.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at:{" "}
              <a 
                href="mailto:legal@folktune.app" 
                className="text-primary hover:underline"
              >
                legal@folktune.app
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}