Welcome to the Acoular Organization!
====================================

.. toctree::
   :hidden:

   blog/index
   contributing/index
   funding/index
   history/index

The Acoular Organization develops open source solutions for (acoustic) beamforming and sensor array signal processing. Acoular currently offers:

- `Acoular <https://acoular.org/acoular/>`_: Our flagship Python package for beamforming, deconvolution, source localization and mapping.
- `SpectAcoular <https://acoular.github.io/spectacoular/>`_: Custom graphical user interfaces for Acoular using the `Bokeh <https://bokeh.org/>`_ visualization library.
- `AcouPipe <https://adku1173.github.io/acoupipe/>`__: Toolbox for generating microphone array data with Acoular for deep learning tasks.

-----------------------------

Getting started with Acoular
-----------------------------


.. package-carousel::

-----------------------------

From the Acoular Blog
-----------------------------

.. container:: blog-tiles

   .. grid:: 1 1 2 3
      :gutter: 3

      .. grid-item-card:: Drone Auralization Example
         :link: blog/auralization/drone-auralization-example
         :link-type: doc
         :class-card: blog-tile

         .. image:: blog/auralization/thumb_drone_spectrogram.png
            :class: blog-tile-image

         Simulate and auralize a multicopter flyby with Acoular.

      .. grid-item-card:: Converting Input Data
         :link: blog/convert-input-data/convert-input-data
         :link-type: doc
         :class-card: blog-tile

         .. image:: blog/convert-input-data/image.png
            :class: blog-tile-image

         Convert CSV and MATLAB measurement data to Acoular's HDF5 format.

      .. grid-item-card:: Getting Started – Part 1
         :link: blog/getstart/getstart1
         :link-type: doc
         :class-card: blog-tile

         .. image:: blog/getstart/thumb_getstart.png
            :class: blog-tile-image

         Build a frequency-domain beamforming workflow.

      .. grid-item-card:: Getting Started – Part 2
         :link: blog/getstart/getstart2
         :link-type: doc
         :class-card: blog-tile

         .. image:: blog/getstart/thumb_getstart.png
            :class: blog-tile-image

         Explore additional frequency-domain beamforming methods.

      .. grid-item-card:: Getting Started – Part 3
         :link: blog/getstart/getstart3
         :link-type: doc
         :class-card: blog-tile

         Continue with time-domain processing methods.

   :doc:`Read all blog posts <blog/index>`.

About Us
--------

We are based at the `Engineering Acoustics Group <https://www.tu.berlin/akustik>`_ at Technical University Berlin.

.. grid:: 1 1 2 2
   :gutter: 3

   .. grid-item-card:: History
      :link: history/index
      :link-type: doc

      Learn about the history of the Acoular package.

   .. grid-item-card:: Funding
      :link: funding/index
      :link-type: doc

      Funding bodies that support Acoular's development.

All projects are licensed (`BSD <https://en.wikipedia.org/wiki/Berkeley_Software_Distribution>`_).
:doc:`Community contributions <../contributing/index>` are welcome!
