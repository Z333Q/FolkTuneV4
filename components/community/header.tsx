import { Users } from "lucide-react";

export function CommunityHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Users className="h-8 w-8" />
        <h1 className="text-3xl font-bold tracking-tight">Community</h1>
      </div>
      <p className="text-muted-foreground">
        Connect with folk music enthusiasts from around the world, share your progress,
        and celebrate cultural diversity through music.
      </p>
    </div>
  );
}