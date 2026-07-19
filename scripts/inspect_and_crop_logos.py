#!/usr/bin/env python3
from pathlib import Path
from PIL import Image
import shutil

logo_dir = Path('public/logos')
backup_dir = Path('public/logos_backup')
backup_dir.mkdir(parents=True, exist_ok=True)

results = []

def analyze_image(path: Path):
    im = Image.open(path)
    w,h = im.size
    mode = im.mode
    bbox = None
    if 'A' in im.getbands():
        # use alpha channel
        alpha = im.split()[-1]
        bbox = alpha.getbbox()
    else:
        # estimate background from top-left pixel and find non-bg bbox
        rgba = im.convert('RGBA')
        bg = rgba.getpixel((0,0))[:3]
        mask = Image.new('L', (w,h), 0)
        px = rgba.load()
        for y in range(h):
            row_nonbg = False
            for x in range(w):
                if px[x,y][:3] != bg:
                    mask.putpixel((x,y), 255)
                    row_nonbg = True
            # small micro-optimization skip
        bbox = mask.getbbox()
    return im, w, h, mode, bbox


def crop_to_bbox(im, bbox, pad=8):
    w,h = im.size
    left = max(0, bbox[0]-pad)
    upper = max(0, bbox[1]-pad)
    right = min(w, bbox[2]+pad)
    lower = min(h, bbox[3]+pad)
    return im.crop((left, upper, right, lower))

print('Inspecting logos in', logo_dir)
for path in sorted(logo_dir.iterdir()):
    if path.suffix.lower() not in ('.png', '.jpg', '.jpeg', '.webp'):
        continue
    try:
        im, w, h, mode, bbox = analyze_image(path)
        if bbox:
            left,upper,right,lower = bbox
            visible_w = right-left
            visible_h = lower-upper
            pad_x = left + (w-right)
            pad_y = upper + (h-lower)
        else:
            visible_w = 0
            visible_h = 0
            pad_x = w
            pad_y = h
        needs_crop = False
        pad_threshold_px = 20
        pad_fraction_threshold = 0.12
        if bbox:
            if (pad_x > pad_threshold_px or pad_y > pad_threshold_px) or (pad_x/w > pad_fraction_threshold or pad_y/h > pad_fraction_threshold):
                needs_crop = True
        else:
            needs_crop = False

        print(f"{path.name}: size={w}x{h} mode={mode} visible={visible_w}x{visible_h} pad_x={pad_x} pad_y={pad_y} needs_crop={needs_crop}")
        results.append((path.name, w, h, mode, visible_w, visible_h, pad_x, pad_y, needs_crop))

        if needs_crop:
            # backup original
            shutil.copy2(path, backup_dir/path.name)
            cropped = crop_to_bbox(im, bbox, pad=8)
            # Save in same format
            cropped.save(path)
            print(f" -> Cropped and saved: {path.name} (backup at logos_backup/{path.name})")
    except Exception as e:
        print('ERR', path.name, e)

print('\nSummary:')
for r in results:
    print(r)
print('\nDone')
