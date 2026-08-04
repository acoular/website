Documentation
=============

Acoular's package documentation lives in the `Acoular repository <https://github.com/acoular/acoular/tree/master/docs>`_ and is written in `reStructuredText <https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html>`_. Build it locally with ``uv run make -C docs html``.

Do not edit generated files in ``docs/api_ref/generated`` or ``docs/auto_examples``.

User Documentation
------------------

Edit the relevant non-generated ``.rst`` file under ``docs``. Add new pages to the appropriate ``index.rst`` to include them in the navigation.

API Documentation
-----------------

API pages are generated from source docstrings through Sphinx ``autosummary`` and follow the `NumPy docstring style <https://numpydoc.readthedocs.io/en/latest/format.html>`_. Public classes, methods, and functions need a summary and documented parameters and returns. Add public API objects to the module's ``.. autosummary::`` directive.

Use `TimeSamples <https://github.com/acoular/acoular/blob/master/acoular/sources.py>`_ as the current example for class docstrings, attribute comments, methods, and module structure.

Examples and doctests
---------------------

Keep docstring examples executable. CI runs them with doctest; check them locally with:

.. code-block:: console

   $ uv run python -m pytest --doctest-modules acoular

Add Python examples under ``examples``. Files must start with ``example_``. Sphinx-Gallery executes them during documentation builds, so examples should complete in a few seconds. Add a new example subdirectory to ``sphinx_gallery_conf`` in ``docs/conf.py``.

Citing Literature
-----------------

Add references for literature-based features to ``docs/literature/literature.bib``. Cite them in documentation with ``:cite:`<BIBTEX_KEY>```.
