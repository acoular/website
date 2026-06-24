.. _Code Quality Standards:

Code quality standards
======================

All packages on this website should meet a high standard of code quality.
In practice, this usually means checking:

#. linting and formatting,
#. documentation builds, and
#. tests.

We recommend running these checks locally before submitting a pull request.

Linting and formatting
----------------------

The Acoular packages use `ruff <https://pypi.org/project/ruff/>`_ for linting and formatting.

Check your changes with the package and tool you are using:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run ruff check
               $ uv run ruff format --check

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ ruff check
               $ ruff format --check

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ ruff check
               $ ruff format --check

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ ruff check
               $ ruff format --check

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run ruff check
               $ uv run ruff format --check

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ ruff check
               $ ruff format --check

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ ruff check
               $ ruff format --check

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ ruff check
               $ ruff format --check

If you want ``ruff`` to apply autofixes:

.. tab-set::
   :sync-group: tool

   .. tab-item:: ``uv``
      :sync: uv

      .. code-block:: console

         $ uv run ruff check --fix
         $ uv run ruff format

   .. tab-item:: ``pip``
      :sync: pip

      .. code-block:: console

         $ ruff check --fix
         $ ruff format

   .. tab-item:: ``mamba``
      :sync: mamba

      .. code-block:: console

         $ ruff check --fix
         $ ruff format

   .. tab-item:: ``conda``
      :sync: conda

      .. code-block:: console

         $ ruff check --fix
         $ ruff format

Documentation compilation
-------------------------

Before submitting documentation-related changes, build the docs locally:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run make -C docs html

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ make -C docs html

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ make -C docs html

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ make -C docs html

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run make -C docs html

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ make -C docs html

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ make -C docs html

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ make -C docs html

Testing
-------

Run the test suite before opening a pull request:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run pytest

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ pytest

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ pytest

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ pytest

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run pytest

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ pytest

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ pytest

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ pytest

Doctests
--------

Some packages also contain runnable docstring examples.
If you touch those examples, it is a good idea to run doctests too.

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run python -m pytest --doctest-modules acoular

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ python -m pytest --doctest-modules acoular

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ python -m pytest --doctest-modules acoular

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ python -m pytest --doctest-modules acoular

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv run python -m pytest --doctest-modules src/spectacoular

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ python -m pytest --doctest-modules src/spectacoular

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ python -m pytest --doctest-modules src/spectacoular

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ python -m pytest --doctest-modules src/spectacoular
