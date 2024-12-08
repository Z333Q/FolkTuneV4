import { ExploreHeader } from "@/components/explore/header";
import { SongGrid } from "@/components/explore/song-grid";
import { CategoryFilter } from "@/components/explore/category-filter";
import { Leaderboard } from "@/components/explore/leaderboard";

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ExploreHeader />
      <div className="grid gap-8 md:grid-cols-12 mt-8">
        <div className="md:col-span-3 space-y-8">
          <CategoryFilter />
          <Leaderboard />
        </div>
        <div className="md:col-span-9">
          <SongGrid />
        </div>
      </div>
    </div>
  );
}