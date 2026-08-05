import sys
from pathlib import Path

from acoular_sphinx import build_html_context, configure_theme_options, resolve_docs_build_config

sys.path.insert(0, str(Path(__file__).parent / '_ext'))

project = 'Acoular Organization'
copyright = '2026, Acoular Organization'
author = 'Acoular Organization'
language = 'en'

extensions = [
    'acoular_sphinx',
    'sphinx_copybutton',
    'sphinx_design',
    'carousel',
    'myst_nb',
]

docs_build = resolve_docs_build_config()

html_theme = 'pydata_sphinx_theme'
html_context = build_html_context()
next(link for link in html_context['acoular_nav_links'] if link['label'] == 'Blog').update(
    url='/blog/', external=False
)
html_theme_options = configure_theme_options(use_edit_page_button=False)
html_baseurl = docs_build['html_baseurl']
exclude_patterns = ['_build']
templates_path = ['_templates']
html_static_path = ['_static']
html_sidebars = {'index': []}
nb_execution_mode = 'off'
html_extra_path = ['_extra']
html_css_files = ['custom.css']

copybutton_prompt_text = r'>>> |\.\.\. |\$ |In \[\d*\]: | {2,5}\.\.\.: | {5,8}: '  # strips prompts
copybutton_prompt_is_regexp = True
