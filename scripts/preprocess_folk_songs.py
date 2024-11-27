
import pandas as pd
from midiutil import MIDIFile
import os

def preprocess_folk_songs(data_path, output_folder):
    # Load the song database
    df = pd.read_excel(data_path)
    
    # Ensure output folders exist
    lyrics_folder = os.path.join(output_folder, "lyrics")
    melody_folder = os.path.join(output_folder, "melodies")
    os.makedirs(lyrics_folder, exist_ok=True)
    os.makedirs(melody_folder, exist_ok=True)
    
    for index, row in df.iterrows():
        song_id = row['SongID']
        lyrics = row['Lyrics']
        melody = row['Melody']  # Assuming melody is a series of note pitches
        
        # Save lyrics to a text file
        with open(os.path.join(lyrics_folder, f"{song_id}_lyrics.txt"), "w") as f:
            f.write(lyrics)
        
        # Convert melody to MIDI
        midi = MIDIFile(1)
        track = 0
        time = 0  # Start at the beginning
        channel = 0
        volume = 100
        midi.addTrackName(track, time, f"{song_id}_melody")
        midi.addTempo(track, time, 120)  # Default tempo
        
        for note, duration in melody:  # Assuming melody is [(note, duration), ...]
            midi.addNote(track, channel, note, time, duration, volume)
            time += duration
        
        with open(os.path.join(melody_folder, f"{song_id}_melody.mid"), "wb") as midi_file:
            midi.writeFile(midi_file)
