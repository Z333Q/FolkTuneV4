import { notFound } from "next/navigation";
import { SongHeader } from "@/components/songs/song-header";
import { SongVisualizer } from "@/components/songs/song-visualizer";
import { LyricsDisplay } from "@/components/songs/lyrics-display";
import { VoicePartsGrid } from "@/components/songs/voice-parts-grid";
import { MelodyNotation } from "@/components/songs/melody-notation";
import { getSongById } from "@/lib/songs";
import { songs } from "@/lib/songs";

interface SongPageProps {
  params: {
    id: string;
  };
}

// Required for static export
export function generateStaticParams() {
  return songs.map((song) => ({
    id: song.id,
  }));
}

export default function SongPage({ params }: SongPageProps) {
  const song = getSongById(params.id);

  if (!song) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SongHeader song={song} />
      
      <div className="grid gap-8 mt-8">
        <div className="grid md:grid-cols-2 gap-6">
          <SongVisualizer song={song} />
          <LyricsDisplay song={song} />
        </div>
        
        <VoicePartsGrid song={song} />
        
        <div className="mt-8">
          <MelodyNotation song={song} />
        </div>
      </div>
    </div>
  );
}