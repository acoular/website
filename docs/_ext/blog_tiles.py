"""
Sphinx directive that renders the homepage's latest-blog-posts tiles.

The tiles are populated client-side from the Acoular blog's RSS feed
(https://blog.acoular.org/index.xml), so new posts show up without a
docs rebuild.
"""

from __future__ import annotations

from pathlib import Path

from docutils import nodes
from jinja2 import Environment, FileSystemLoader
from sphinx.application import Sphinx
from sphinx.util.docutils import SphinxDirective

_TEMPLATE_DIR = Path(__file__).parent.parent / "_templates"
_ENV = Environment(loader=FileSystemLoader(str(_TEMPLATE_DIR)), autoescape=True)

_FEED_URL = 'https://blog.acoular.org/index.xml'
_BLOG_URL = 'https://blog.acoular.org'


class BlogTilesDirective(SphinxDirective):
    """Usage: ``.. blog-tiles::`` with no arguments or content."""

    has_content = False

    def run(self) -> list[nodes.Node]:
        template = _ENV.get_template('blog_tiles.html')
        html = template.render(feed_url=_FEED_URL, blog_url=_BLOG_URL)
        return [nodes.raw('', html, format='html')]


def setup(app: Sphinx) -> dict[str, bool]:
    app.add_directive('blog-tiles', BlogTilesDirective)
    return {'parallel_read_safe': True, 'parallel_write_safe': True}
