"""
Sphinx directive that renders the homepage's Bootstrap package carousel.
"""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from docutils import nodes
from jinja2 import Environment, FileSystemLoader
from sphinx.application import Sphinx
from sphinx.util.docutils import SphinxDirective

_TEMPLATE_DIR = Path(__file__).parent.parent / "_templates"
_ENV = Environment(loader=FileSystemLoader(str(_TEMPLATE_DIR)), autoescape=True)


@dataclass(frozen=True)
class CarouselItem:
    name: str
    tagline: str
    link: str | None = None
    video_id: str | None = None
    start_seconds: int = 0
    image_src: str | None = None
    image_alt: str | None = None

    def __post_init__(self) -> None:
        if self.video_id and self.image_src:
            msg = f'CarouselItem {self.name!r} cannot set both video_id and image_src.'
            raise ValueError(msg)

    @property
    def media_kind(self) -> str | None:
        if self.video_id:
            return 'video'
        if self.image_src:
            return 'image'
        return None

    @property
    def embed_url(self) -> str:
        url = f'https://www.youtube.com/embed/{self.video_id}?enablejsapi=1'
        if self.start_seconds:
            url += f'&start={self.start_seconds}'
        return url


PACKAGES: tuple[CarouselItem, ...] = (
    CarouselItem(
        name='How To Make A Legit Sound Camera',
        tagline='Benn Jordan uses Acoular to show how to build an affordable acoustic imaging camera and how to use it for sound source localization.',
        link='https://github.com/acoular',
        video_id='c5ynZ3lMQJc',
        start_seconds=161,
    ),
    CarouselItem(
        name='Drone Tracking with a Microphone Array',
        tagline='Acoular developer Gert Herold explains flight path tracking and acoustic signature separation of drones using microphone array measurement and Acoular.',
        link='https://zenodo.org/records/4548251',
        video_id='0RvojJD6fLI',
    ),
    CarouselItem(
        name='Building an Acoustic Camera with the UMA-16',
        tagline='miniDSP offers a tutorial on building a low-cost acoustic camera with the UMA-16 microphone array using Acoular.',
        link='https://www.minidsp.com/applications/usb-mic-array/acoustic-camera-uma16',
        image_src='/_media/acoustic-camera-4.png',
        image_alt='Acoustic camera built with a UMA-16 microphone array',
    ),
)


class PackageCarouselDirective(SphinxDirective):
    """Usage: ``.. package-carousel::`` with no arguments or content."""

    has_content = False

    def run(self) -> list[nodes.Node]:
        template = _ENV.get_template('package_carousel.html')
        html = template.render(packages=PACKAGES)
        return [nodes.raw('', html, format='html')]


def setup(app: Sphinx) -> dict[str, bool]:
    app.add_directive('package-carousel', PackageCarouselDirective)
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
