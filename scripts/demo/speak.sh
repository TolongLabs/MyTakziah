#!/usr/bin/env bash
# speak.sh: render one narration line (stdin) to a 16-bit PCM mono WAV at <out.wav>.
# Drop-in contract for speak.py: text on stdin, wav out as argv[1]. Uses edge-tts + ffmpeg.
# Voice speaks faster: DEMO_SPEED (1.25x default) becomes the edge-tts --rate percentage.
set -euo pipefail

out="${1:?usage: speak.sh <out.wav> (text on stdin)}"
text="$(cat)"
[ -n "$text" ] || { echo "no narration text on stdin" >&2; exit 2; }

EDGE_TTS="${EDGE_TTS:-/home/adam/.browser-use-env/bin/edge-tts}"
voice="${DEMO_VOICE:-en-US-AriaNeural}"
speed="${DEMO_SPEED:-1.25}"
# edge-tts --rate accepts "+N%" / "-N%" / word-per-minute integers. Map DEMO_SPEED to a percent.
rate_pct="$(python3 - "$speed" <<'PY'
import sys
s = float(sys.argv[1])
if s <= 0:
    raise SystemExit(2)
print(f'+{int(round((s - 1) * 100))}%')
PY
)"
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT
"$EDGE_TTS" --voice "$voice" --rate "$rate_pct" --text "$text" \
  --write-media "$tmpdir/speech.mp3" >/dev/null 2>&1
ffmpeg -y -loglevel error -i "$tmpdir/speech.mp3" -ac 1 -ar 24000 -c:a pcm_s16le "$out"
