#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/../.." && pwd)"

demo_dir="${DEMO_DIR:-$repo_root/.demo-output}"
source="${DEMO_SOURCE:-$demo_dir/capture.webm}"
output="${DEMO_OUT:-$demo_dir/mytakziah-e2e-walkthrough.mp4}"

ffmpeg="${DEMO_FFMPEG:-$(command -v ffmpeg || true)}"
ffprobe="${DEMO_FFPROBE:-$(command -v ffprobe || true)}"
fps="25"
preset="veryfast"

mytakziah_ground="#F9F3EA"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1 && [ ! -x "$1" ]; then
    echo "missing command: $1" >&2
    exit 1
  fi
}

require_command "$ffmpeg"
require_command "$ffprobe"

if [ ! -f "$source" ]; then
  echo "missing source capture: $source" >&2
  exit 1
fi

if [ "$source" = "$output" ]; then
  echo "DEMO_OUT must differ from DEMO_SOURCE" >&2
  exit 1
fi

mkdir -p "$(dirname -- "$output")"

video_filter="scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=${mytakziah_ground},fps=${fps},format=yuv420p"

"$ffmpeg" -y -loglevel error -i "$source" -an -vf "$video_filter" \
  -c:v libx264 -preset "$preset" -crf 20 -pix_fmt yuv420p "$output"

ffprobe_value() {
  "$ffprobe" -v error -select_streams "$1" -show_entries "stream=$2" -of csv=p=0 "$output"
}

ffprobe_format() {
  "$ffprobe" -v error -show_entries "format=$1" -of csv=p=0 "$output"
}

validate() {
  local field=$1 expected=$2
  local actual
  actual="$(ffprobe_value v:0 "$field")"
  if [ "$actual" != "$expected" ]; then
    echo "validation failed: video stream $field is $actual, expected $expected" >&2
    exit 1
  fi
}

validate "codec_name" "h264"
validate "width" "1920"
validate "height" "1080"
validate "pix_fmt" "yuv420p"

audio_streams="$(ffprobe_value a:0 index 2>/dev/null | wc -l | tr -d ' ')"
if [ "$audio_streams" -gt 0 ]; then
  echo "validation failed: output contains an audio stream" >&2
  exit 1
fi

duration="$(ffprobe_format duration)"
if [ -z "$duration" ] || [ "${duration%.*}" -le 0 ]; then
  echo "validation failed: output has no measurable duration" >&2
  exit 1
fi

printf 'encoded: %s\n' "$output"
printf 'duration: %.1fs\n' "$duration"
