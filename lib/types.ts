export interface Song {
  id: string;
  category: string;
  subcategory: string;
  country: string;
  name: string;
  artist: string;
  spotifyUrl: string;
  youtubeUrl: string;
  culturalContext: string;
  lyrics?: string;
  lyricsTranslation?: string;
  tempo?: number;
  key?: string;
  timeSignature?: string;
  duration?: string;
  voiceParts?: {
    high: string;
    mid: string;
    bass: string;
  };
}