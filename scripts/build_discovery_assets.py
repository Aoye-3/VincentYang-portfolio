"""Build decorative thumbnails from 页面图片; run from this repository with Pillow.

素材规则：仅使用 UX 与获奖证书目录，不导入插画 / AIGC。各目录按文件名自然排序。
页面按 UX → UX → 获奖证书循环，使 UX 占三分之二。
只等比例缩小；横向长图保留横向完整内容，不旋转、不裁切，不强塞进竖框。
"""
from pathlib import Path
from html import escape
import json
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / 'assets/images/discovery'
MANIFEST = ROOT / 'docs/discovery-assets.json'
CATEGORIES = [('ux', 'UX界面'), ('awards', '获奖证书')]

def natural_key(path):
    return [int(part) if part.isdigit() else part for part in re.split(r'(\d+)', path.name)]

def build():
    old_assets = json.loads(MANIFEST.read_text(encoding='utf-8')) if MANIFEST.exists() else []
    entries = []
    tags = []
    ASSETS.mkdir(parents=True, exist_ok=True)
    for category, folder in CATEGORIES:
        sources = sorted((ROOT / '页面图片' / folder).iterdir(), key=natural_key)
        sources = [path for path in sources if path.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp'}]
        if not sources:
            raise ValueError(f'No images in {folder}')
        for number, source in enumerate(sources, 1):
            target = ASSETS / f'{category}-{number:02}.webp'
            with Image.open(source) as original:
                image = ImageOps.exif_transpose(original).convert('RGB')
                image.thumbnail((800, 440), Image.Resampling.LANCZOS)
                image.save(target, 'WEBP', quality=78, method=6)
                width, height = image.size
            file = target.relative_to(ROOT).as_posix()
            entries.append({'file': file, 'source': source.relative_to(ROOT).as_posix(), 'category': category, 'width': width, 'height': height})
            tags.append(f'          <img src="{escape(file)}" data-gallery-category="{category}" alt="" width="{width}" height="{height}">')
    index = ROOT / 'index.html'
    html = index.read_text(encoding='utf-8')
    template = '<template id="discovery-tiles">\n' + '\n'.join(tags) + '\n        </template>'
    html, count = re.subn(r'<template id="discovery-tiles">.*?</template>', lambda _: template, html, flags=re.S)
    assert count == 1, 'Expected exactly one discovery template'
    index.write_text(html, encoding='utf-8')
    MANIFEST.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    current = {entry['file'] for entry in entries}
    for entry in old_assets:
        obsolete = (ROOT / entry['file']).resolve()
        if entry['file'] not in current and obsolete.parent == ASSETS.resolve():
            obsolete.unlink(missing_ok=True)
    print(f'{len(entries)} thumbnails; {sum((ROOT / e["file"]).stat().st_size for e in entries) / 1024:.0f} KiB')

if __name__ == '__main__':
    build()
