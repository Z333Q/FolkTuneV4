
import librosa
import numpy as np
import sounddevice as sd

def analyze_real_time_feedback(duration=10, sr=22050):
    """
    Capture audio in real-time, analyze feedback, and provide metrics.
    
    Args:
    - duration (int): Duration to capture in seconds.
    - sr (int): Sampling rate.
    """
    print("Starting real-time feedback session...")
    print("Recording for {} seconds.".format(duration))
    
    # Record audio in real-time
    audio = sd.rec(int(duration * sr), samplerate=sr, channels=1, dtype='float32')
    sd.wait()  # Wait for the recording to finish
    audio = audio.flatten()  # Convert to 1D array

    # Analyze pitch accuracy
    pitches, magnitudes = librosa.piptrack(y=audio, sr=sr)
    avg_pitch = np.mean(pitches[pitches > 0]) if np.any(pitches > 0) else 0

    # Analyze rhythmic alignment
    tempo, _ = librosa.beat.beat_track(y=audio, sr=sr)
    
    # Example metrics for demonstration
    metrics = {
        "Average Pitch (Hz)": round(avg_pitch, 2),
        "Tempo (BPM)": round(tempo, 2)
    }

    # Print metrics
    print("Feedback Metrics:")
    for key, value in metrics.items():
        print(f"{key}: {value}")

    return metrics

# Example usage
if __name__ == "__main__":
    duration = 5  # Record for 5 seconds
    feedback_metrics = analyze_real_time_feedback(duration=duration)
    print("Real-Time Feedback Complete.")
