import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Card className="border-none shadow-none bg-background">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Privacy Policy
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Create an account</li>
              <li>Use our learning features</li>
              <li>Record your singing</li>
              <li>Interact with other users</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your learning experience</li>
              <li>Process and analyze your singing recordings</li>
              <li>Communicate with you about our services</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information. Your data 
              is encrypted during transmission and at rest. We regularly review our security practices to 
              ensure the safety of your information.
            </p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Access Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  Request a copy of your personal data that we hold
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Correct Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  Update or correct any inaccurate information
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Delete Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  Request deletion of your personal information
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Export Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  Download your data in a portable format
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a 
                href="mailto:privacy@folktune.app" 
                className="text-primary hover:underline"
              >
                privacy@folktune.app
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}