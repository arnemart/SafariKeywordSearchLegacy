Safari Keyword Search
=====================

This is a simple extension for Safari 5.1 and above to enable keyword search from the address bar. The following searches are included:

- **a**: amazon.com
- **down**: downforeveryoneorjustme.com
- **e**: ebay.com
- **g**: google.com
- **gm**: maps.google.com
- **imdb**: imdb.com
- **so**: stackoverflow.com
- **w**: en.wikipedia.org
- **wa**: wolframalpha.com
- **y**: youtube.com

To edit or delete these, or add your own, right-click any web page and select “Keyword Search Settings”. Here you can add keywords and search URLs, and delete or modify the existing ones. Put `@@@` in the search URL to insert the search string. It is also possible to have keyword expansions without search strings.

The url for the `Default` keyword is used when no other keyword is provided, and what is entered into the address bar doesn't look like a URL. This is set to Googles “I am feeling lucky” search by default.

Limitations
-----------

- The search term cannot contain a colon symbol (:), as this makes Safari believe something is wrong with the URL protocol.
- Preferably, the settings should have been in the Extensions tab of the Safari preferences window, but the API for this is currently too limited.

Installation
------------

1. Click the “Download”-button and download the file “SafariKeywordSearch.safariextz”
2. Double-click it
3. There is no step 3 :-)