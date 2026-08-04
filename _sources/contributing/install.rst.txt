Developer Installation
======================

Prerequisites
-------------

Before contributing to Acoular, fork the `Acoular repository <https://github.com/acoular/acoular>`_ and clone your fork:

.. code-block:: console

   $ git clone https://github.com/<your-account>/acoular.git
   $ cd acoular

Acoular supports Python 3.11 through 3.14. Use the latest supported version.

Creating a development environment
----------------------------------

Install all development dependencies and the optional runtime dependencies with `uv <https://docs.astral.sh/uv/>`_:

.. code-block:: console

   $ uv sync --all-groups --extra full

``uv`` creates and manages ``.venv`` automatically. The checkout is installed in editable mode, so source changes take effect immediately.

System dependencies
-------------------

On Ubuntu, install Graphviz for documentation and PortAudio for ``sounddevice``:

.. code-block:: console

   $ sudo apt install graphviz libportaudio2
