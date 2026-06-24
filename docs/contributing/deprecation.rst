.. _Deprecation Policy:

Deprecation policy
==================

Avoid removing public APIs abruptly.
If a change is backward-incompatible, document it clearly and coordinate it with the maintainers.

.. tab-set::
   :sync-group: package

   .. tab-item:: Acoular
      :sync: acoular

      Deprecated classes, functions, and traits can only be removed after they have been deprecated for at least three releases.
      Always document the version in which the deprecated API is expected to be removed.
      This version needs to be at least nine months in the future.
      
      For the renaming of traits, there is a convenient `deprecated_alias() <https://acoular.org/acoular/api_ref/generated/acoular.deprecation.html#acoular.deprecation.deprecated_alias>`_ decorator which will automatically create deprecated traits, defer them to their respective new names, and emit a deprecation warning.

   .. tab-item:: SpectAcoular
      :sync: spectacoular

      SpectAcoular does not currently publish a separate deprecation policy on this website.
      For potentially breaking changes, open a discussion in the repository or coordinate through a pull request before removing public APIs.
