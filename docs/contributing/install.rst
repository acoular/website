Developer installation
======================

Prerequisites
-------------

Before you start contributing:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      * Fork the `Acoular repository <https://github.com/acoular/acoular>`_.
      * Clone your fork locally:

      .. code-block:: console

         $ git clone https://github.com/<your-user>/acoular.git
         $ cd acoular

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      * Fork the `SpectAcoular repository <https://github.com/acoular/spectacoular>`_.
      * Clone your fork locally:

      .. code-block:: console

         $ git clone https://github.com/<your-user>/spectacoular.git
         $ cd spectacoular

We recommend using the latest Python version supported by the package you are working on.
Both Acoular and SpectAcoular currently support Python 3.11 to 3.14.

Creating a development environment
----------------------------------

Create a virtual environment with your preferred tool:

.. tab-set::
   :sync-group: tool

   .. tab-item:: ``uv``
      :sync: uv

      .. code-block:: console

         $ uv venv

      .. note::
         ``uv`` will handle environment activation implicitly when using ``uv run``.

   .. tab-item:: ``pip`` & ``venv``
      :sync: pip

      .. code-block:: console

         $ python3 -m venv .venv
         $ source .venv/bin/activate

   .. tab-item:: ``mamba``
      :sync: mamba

      .. code-block:: console

         $ mamba create -n my-env python
         $ mamba activate my-env

   .. tab-item:: ``conda``
      :sync: conda

      .. code-block:: console

         $ conda create -n my-env python
         $ conda activate my-env

Editable installation
---------------------

Install the package in editable mode together with its development dependencies:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv sync --extra full --group dev

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ pip install --upgrade pip
               $ pip install -Ue .'[full]' --group dev

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ mamba install pip
               $ pip install -Ue .'[full]' --group dev

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ conda install pip
               $ pip install -Ue .'[full]' --group dev

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      .. tab-set::
         :sync-group: tool

         .. tab-item:: ``uv``
            :sync: uv

            .. code-block:: console

               $ uv sync --extra full --group dev

         .. tab-item:: ``pip``
            :sync: pip

            .. code-block:: console

               $ pip install --upgrade pip
               $ pip install -Ue .'[full]' --group dev

         .. tab-item:: ``mamba``
            :sync: mamba

            .. code-block:: console

               $ mamba install pip
               $ pip install -Ue .'[full]' --group dev

         .. tab-item:: ``conda``
            :sync: conda

            .. code-block:: console

               $ conda install pip
               $ pip install -Ue .'[full]' --group dev

An editable installation lets you change the source code and documentation without reinstalling the package after every edit.

System dependencies
-------------------

Some optional features require additional system packages:

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      On Ubuntu or Debian, these are commonly needed:

      .. code-block:: console

         $ sudo apt install graphviz libportaudio2

      ``graphviz`` is needed for documentation builds.
      ``libportaudio2`` is needed for ``sounddevice``.

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      On Ubuntu or Debian, this is commonly needed for live-audio features:

      .. code-block:: console

         $ sudo apt install libportaudio2

      This is required by ``sounddevice``.
