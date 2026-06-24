Documentation
=============

The package documentation lives in each package repository and is built with `Sphinx <https://www.sphinx-doc.org/>`_.
This shared page collects the main contributor guidance for the packages currently published on this website.

User documentation
------------------

The easiest way to contribute is to improve existing documentation pages.
Edit the relevant ``.rst`` files, then build the docs locally to verify the result.

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      * Documentation root: ``docs/``
      * Landing page: ``docs/index.rst``
      * Contributing pages in the package repo: ``docs/contributing/``
      * User guide: ``docs/user_guide/``
      * News: ``docs/news/``

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      * Documentation root: ``docs/``
      * Landing page: ``docs/index.rst``
      * Installation guide: ``docs/install/``
      * User guide: ``docs/user_guide/``
      * Application pages: ``docs/apps/``
      * News: ``docs/news/``

.. note::
   Some documentation subdirectories are generated automatically during the build process.
   Do not edit generated files directly.

Generated API documentation
---------------------------

API documentation is generated from docstrings.
When you add or change public classes, methods, or functions, update their docstrings too.

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      * Main Python package: ``acoular/``
      * Generated API docs: ``docs/api_ref/``
      * Examples source: ``examples/``
      * Generated example docs: ``docs/auto_examples/``

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      * Main Python package: ``src/spectacoular/``
      * Generated API docs: ``docs/api_ref/``
      * Examples source: ``examples/``
      * Generated example docs: ``docs/auto_examples/``

Docstrings should use reStructuredText-compatible syntax.
For Python APIs, NumPy-style docstrings are preferred.

Documenting classes, methods, and functions
-------------------------------------------

When documenting public APIs:

* start with a short summary line,
* add a longer explanation when useful,
* document parameters and return values,
* add examples where they help users,
* link related APIs with cross-references when possible.

If your package includes doctested examples, keep them runnable as standalone snippets where possible.

Examples
--------

Both packages include example scripts that are turned into documentation pages.
New examples are welcome, but they should stay reasonably small and fast to run because they are executed during documentation builds.

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      Add examples under ``examples/`` and make sure they fit the existing gallery structure used by the package.

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      Add examples under ``examples/``.
      SpectAcoular also has hand-written application pages under ``docs/apps/`` that may need updates when app behavior changes.

Citing literature
-----------------

If you contribute a feature or method based on scientific literature, add the corresponding reference to the package documentation where appropriate.
Check the package's existing bibliography and citation style before adding new references.
