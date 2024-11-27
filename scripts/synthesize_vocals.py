
import subprocess
import os

def synthesize_vocals(lyrics_folder, melody_folder, output_folder, deepsinger_path):
    os.makedirs(output_folder, exist_ok=True)
    
    for lyrics_file in os.listdir(lyrics_folder):
        if lyrics_file.endswith(".txt"):
            song_id = lyrics_file.split("_")[0]
            melody_file = os.path.join(melody_folder, f"{song_id}_melody.mid")
            output_file = os.path.join(output_folder, f"{song_id}_synthesized.wav")
            
            # Call DeepSinger CLI (adjust based on its usage)
            command = [
                "python", os.path.join(deepsinger_path, "synthesize.py"),
                "--lyrics", os.path.join(lyrics_folder, lyrics_file),
                "--melody", melody_file,
                "--output", output_file
            ]
            subprocess.run(command)
