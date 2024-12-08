import { Song } from "./types";

export const songs: Song[] = [
  {
    id: "djougouya-magni",
    category: "African Folk Song Categories",
    subcategory: "Griot Traditions",
    country: "Mali",
    name: "Djougouya Magni",
    artist: "Toumani Diabaté",
    spotifyUrl: "https://open.spotify.com/track/example",
    youtubeUrl: "https://youtube.com/watch?v=example",
    culturalContext: "Reflects the mastery of kora, a traditional harp-lute, in Malian oral history and storytelling.",
    lyrics: "Original lyrics in Bambara...",
    lyricsTranslation: "English translation of the lyrics...",
    tempo: 120,
    key: "F Major",
    timeSignature: "4/4",
    duration: "5:30",
  },
  {
    id: "sakura-sakura",
    category: "Asian Folk Song Categories",
    subcategory: "Min'yō",
    country: "Japan",
    name: "Sakura Sakura",
    artist: "Traditional",
    spotifyUrl: "https://open.spotify.com/track/example",
    youtubeUrl: "https://youtube.com/watch?v=example",
    culturalContext: "A well-known Japanese folk song celebrating cherry blossoms, symbolizing the beauty and fleeting nature of life.",
    lyrics: "さくら さくら\nやよいの そらは...",
    lyricsTranslation: "Cherry blossoms, cherry blossoms\nIn the spring sky...",
    tempo: 80,
    key: "D Minor",
    timeSignature: "4/4",
    duration: "3:15",
  },
  {
    id: "el-condor-pasa",
    category: "South American Folk Song Categories",
    subcategory: "Huayno",
    country: "Peru",
    name: "El Condor Pasa",
    artist: "Daniel Alomía Robles",
    spotifyUrl: "https://open.spotify.com/track/example",
    youtubeUrl: "https://youtube.com/watch?v=example",
    culturalContext: "A world-renowned Andean melody symbolizing Peruvian identity, incorporating traditional instruments like the pan flute and charango.",
    lyrics: "Quiero ser libre como el viento...",
    lyricsTranslation: "I want to be as free as the wind...",
    tempo: 108,
    key: "G Minor",
    timeSignature: "4/4",
    duration: "4:45",
  }
];

export const featuredSongs = songs;
export const practiceSongs = songs.map(song => ({
  id: song.id,
  title: song.name,
  artist: song.artist,
  origin: song.country,
  difficulty: "Intermediate",
  duration: song.duration,
  description: song.culturalContext
}));

export function getSongById(id: string): Song | undefined {
  return songs.find(song => song.id === id);
}