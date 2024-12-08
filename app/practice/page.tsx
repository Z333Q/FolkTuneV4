import { PracticeHeader } from "@/components/practice/header";
import { PracticeSongList } from "@/components/practice/song-list";
import { PracticeStats } from "@/components/practice/stats";
import { RecordingsList } from "@/components/practice/recordings-list";
import { RecordButton } from "@/components/practice/record-button";

export default function PracticePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PracticeHeader />
      <div className="grid gap-8 md:grid-cols-12 mt-8">
        <div className="md:col-span-8 space-y-8">
          <div className="flex justify-center">
            <RecordButton />
          </div>
          <PracticeSongList />
          <RecordingsList />
        </div>
        <div className="md:col-span-4">
          <PracticeStats />
        </div>
      </div>
    </div>
  );
}