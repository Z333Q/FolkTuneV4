import { CommunityHeader } from "@/components/community/header";
import { GlobalLeaderboard } from "@/components/community/global-leaderboard";
import { CommunityStats } from "@/components/community/stats";
import { RecentActivity } from "@/components/community/recent-activity";
import { TopContributors } from "@/components/community/top-contributors";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CommunityHeader />
      <div className="grid gap-8 mt-8">
        <CommunityStats />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8 space-y-8">
            <GlobalLeaderboard />
            <RecentActivity />
          </div>
          <div className="md:col-span-4">
            <TopContributors />
          </div>
        </div>
      </div>
    </div>
  );
}