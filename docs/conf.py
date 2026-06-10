from acoular_sphinx import build_html_context, configure_theme_options, resolve_docs_build_config

project = 'Acoular Organization'
copyright = '2026, Acoular Organization'
author = 'Acoular Organization'
language = 'en'

extensions = [
    'acoular_sphinx',
    'sphinx_design',
]

docs_build = resolve_docs_build_config()

html_theme = 'pydata_sphinx_theme'
html_context = build_html_context()
html_theme_options = configure_theme_options(use_edit_page_button=False)
html_baseurl = docs_build['html_baseurl']
exclude_patterns = ['_build']
