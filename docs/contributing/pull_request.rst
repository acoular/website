.. _Submitting a pull request:

Submitting a pull request
=========================

Preparing your branch
---------------------

Before submitting a pull request, make sure your work is on a dedicated branch rather than on the default branch of your fork.
A typical workflow is:

.. code-block:: console

   $ git switch -c my-change

Keep your fork in sync with the upstream repository and rebase your work when needed.

Repository-specific pointers
----------------------------

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      * Upstream repository: `acoular/acoular <https://github.com/acoular/acoular>`_
      * Milestones: `Acoular milestones <https://github.com/acoular/acoular/milestones>`_
      * News page to update: `docs/news/index.rst <https://github.com/acoular/acoular/blob/master/docs/news/index.rst>`_
      * Citation file: `CITATION.cff <https://github.com/acoular/acoular/blob/master/CITATION.cff>`_

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      * Upstream repository: `acoular/spectacoular <https://github.com/acoular/spectacoular>`_
      * Milestones: `SpectAcoular milestones <https://github.com/acoular/spectacoular/milestones>`_
      * News page to update: `docs/news/index.rst <https://github.com/acoular/spectacoular/blob/master/docs/news/index.rst>`_
      * Citation file: `CITATION.cff <https://github.com/acoular/spectacoular/blob/master/CITATION.cff>`_

Creating the pull request
-------------------------

When your branch is ready:

#. Push it to your fork.
#. Open the pull request on GitHub.
#. Fill out the description clearly.
#. Link the related issue, if any.
#. Complete the checklist in the pull request template.

A good pull request usually includes:

* a concise summary of the change,
* the motivation or context,
* links to relevant issues or discussions,
* notes about testing or documentation updates.

Before requesting review, make sure the relevant checks from :doc:`quality` pass.
