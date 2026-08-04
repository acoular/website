.. _Code Quality Standards:

Code Quality Standards
----------------------

Acoular's CI checks formatting, linting, documentation builds, and tests. Run the same checks locally before opening a pull request:

.. code-block:: console

   $ uv run ruff check
   $ uv run ruff format --check
   $ uv run make -C docs html
   $ uv run pytest

Apply safe lint fixes and formatting with:

.. code-block:: console

   $ uv run ruff check --fix
   $ uv run ruff format

The `ruff configuration <https://github.com/acoular/acoular/blob/master/pyproject.toml>`_ lives in ``pyproject.toml``.

.. _Documentation Compilation:

Documentation Compilation
~~~~~~~~~~~~~~~~~~~~~~~~~

The documentation build command above checks that the package documentation compiles without errors.
