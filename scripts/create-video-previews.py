"""Create tiny silent card previews; full videos remain separate playback sources."""
import concurrent.futures
import os
from pathlib import Path
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
FFMPEG = os.environ.get('P2T_FFMPEG') or shutil.which('ffmpeg')
if not FFMPEG:
    raise SystemExit('Set P2T_FFMPEG to an installed FFmpeg executable.')

def create(source):
    folder, number = source.parent.name, source.stem.replace('-preview', '')
    destination = ROOT / 'public/portfolio/previews' / folder / f'{number}.mp4'
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryFile() as log:
        subprocess.run([
            FFMPEG, '-hide_banner', '-nostdin', '-y', '-i', str(source), '-t', '8',
            '-vf', 'scale=480:480:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30',
            '-an', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '29',
            '-maxrate', '300k', '-bufsize', '600k', '-pix_fmt', 'yuv420p',
            '-movflags', '+faststart', str(destination),
        ], stdout=log, stderr=log, check=True)
    return destination.stat().st_size

sources = [
    p for p in (ROOT / 'public/portfolio').glob('*/*.mp4')
    if p.stem.isdecimal() or p.stem.endswith('-preview')
]
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    sizes = list(pool.map(create, sources))
print(f'{len(sizes)} silent previews: {sum(sizes) / 1048576:.2f} MiB total')
