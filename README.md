
# FolkTune App: AI-Driven Vocal Training with DeepSinger

This repository contains the source code and resources for **FolkTune**, an AI-driven app that leverages **DeepSinger** to synthesize ideal singing patterns and provide granular feedback on user performances. The app is tailored for folk music enthusiasts and educators.

## Features

1. **Real-Time Feedback Implementation**:
   - Captures user audio in real-time and provides immediate feedback.
   - Evaluates pitch accuracy and rhythmic alignment on-the-fly.

2. **Preprocessing Folk Songs**:
   - Converts lyrics into phonemes.
   - Prepares melodies in MIDI format.

3. **DeepSinger Integration**:
   - Generates ideal singing patterns using DeepSinger.

4. **Granular Feedback Analysis**:
   - Analyzes recordings for pitch, rhythm, and articulation.
   - Provides detailed metrics and actionable insights.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/folktune-app.git
   cd folktune-app
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the environment:
   - Ensure `DeepSinger` is installed (see [DeepSinger repo](https://github.com/Ldoun/DeepSinger)).
   - Place trained model weights in the `model/` folder.

4. Run preprocessing, synthesis, and feedback analysis as needed:
   ```bash
   python scripts/preprocess_folk_songs.py
   python scripts/synthesize_vocals.py
   python scripts/analyze_feedback.py
   ```

## Real-Time Feedback Usage

To start a real-time feedback session, run:
```bash
python scripts/analyze_feedback.py
```
During the session:
- Audio will be captured for the specified duration.
- Immediate feedback metrics (e.g., average pitch and tempo) will be displayed.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Contact

For issues or inquiries, please reach out via GitHub issues or zeshan@natureofcommerce.com

