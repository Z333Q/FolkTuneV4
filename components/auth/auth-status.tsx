"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthStatus() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline" asChild>
        <Link href="/auth">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/auth?tab=signup">Sign Up</Link>
      </Button>
    </div>
  );
}