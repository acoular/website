import os

from acoular_sphinx import build_html_context, configure_theme_options

project = 'Acoular Orga Website'
copyright = '2026, Acoular Organization'
author = 'Acoular Organization'
language = 'en'

extensions = [
    'acoular_sphinx',
    'sphinx_design',
]

html_theme = 'pydata_sphinx_theme'
html_context = build_html_context()
html_theme_options = configure_theme_options(use_edit_page_button=False)
html_static_path = ['_static']
html_baseurl = os.environ.get('DOCS_BASEURL', '')
exclude_patterns = ['_build']
