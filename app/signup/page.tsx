import { SignInButtons } from "@/components/auth/sign-in-buttons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage = () => {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Join our community to start learning and sharing folk songs from around the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButtons isSignUp />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
