"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface SignInButtonsProps {
  isSignUp?: boolean;
}

export function SignInButtons({ isSignUp = false }: SignInButtonsProps) {
  const action = isSignUp ? "Sign up" : "Sign in";
  
  return (
    <div className="grid gap-4">
      <Button
        variant="outline"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full"
      >
        <div className="relative w-4 h-4 mr-2">
          <Image
            src="https://www.google.com/favicon.ico"
            alt="Google"
            fill
            sizes="16px"
            className="object-contain"
          />
        </div>
        {action} with Google
      </Button>
      
      <Button
        variant="outline"
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="w-full"
      >
        <Github className="mr-2 h-4 w-4" />
        {action} with GitHub
      </Button>
      
      <Button
        variant="outline"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
        className="w-full"
      >
        <div className="relative w-4 h-4 mr-2">
          <Image
            src="https://open.spotify.com/favicon.ico"
            alt="Spotify"
            fill
            sizes="16px"
            className="object-contain"
          />
        </div>
        {action} with Spotify
      </Button>
      
      <Button
        variant="outline"
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
        className="w-full"
      >
        <div className="relative w-4 h-4 mr-2">
          <Image
            src="https://www.facebook.com/favicon.ico"
            alt="Facebook"
            fill
            sizes="16px"
            className="object-contain"
          />
        </div>
        {action} with Facebook
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {isSignUp ? "Or create account with" : "Or continue with"}
          </span>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        <Mail className="mr-2 h-4 w-4" />
        {action} with Email
      </Button>
    </div>
  );
}