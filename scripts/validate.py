"""Validate published assets, local links, anchors and translation completeness."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.urls = []
        self.keys = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for name in ("href", "src"):
            if attrs.get(name):
                self.urls.append(attrs[name])
        for name in ("data-i18n", "data-i18n-aria"):
            if attrs.get(name):
                self.keys.add(attrs[name])
        if tag == "img":
            assert attrs.get("alt"), "Missing image alternative text"

page = Page()
page.feed((ROOT / "index.html").read_text())
assert len(page.ids) == len(set(page.ids)), "Duplicate HTML IDs"
for url in page.urls:
    parsed = urlparse(url)
    if parsed.scheme or parsed.netloc:
        continue
    if parsed.path:
        assert (ROOT / unquote(parsed.path)).is_file(), f"Missing local asset: {url}"
    if parsed.fragment and not parsed.path:
        assert parsed.fragment in page.ids, f"Missing anchor: {url}"
script = (ROOT / "script.js").read_text()
translations = json.loads(re.search(r"const german = (\{.*?\});", script, re.S).group(1))
assert page.keys <= translations.keys(), f"Untranslated text: {page.keys - translations.keys()}"
for lang in ("en", "de"):
    resume = ROOT / f"resume-{lang}.html"
    assert resume.is_file(), f"Missing public resume: {resume.name}"
    assert "2405" not in resume.read_text(), "Private phone must not be published"
assert (ROOT / "assets" / "portrait.jpg").stat().st_size > 0
assert (ROOT / ".nojekyll").is_file()
print(f"PASS: {len(page.urls)} links/assets, {len(page.ids)} anchors, {len(page.keys)} translation keys, both public resumes")
