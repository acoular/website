# Acoular website

This repo contains the top-level pages for `acoular.org`, currently the Home Page and Contribute section.

## Current setup

- shared Sphinx config is made in `acoular-sphinx` in the `acoular/ci` repo
- the organization webpage is deployed from `gh-pages` branch of this repo
- package documentations are built in the package CI and deployed to `acoular.org/<package>/` by a push to the `gh-pages` here

## Local build

```bash
uv run make -C docs html
```

The output is written to `docs/_build/html`.
