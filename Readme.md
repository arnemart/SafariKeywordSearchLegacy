Safari Keyword Search
=====================

This is a simple extension for Safari 5.1 and above to enable keyword searches. This is a simple but powerful feature that e.g lets you search Google for pages about monkeys by typing `g monkey` in the address bar. The following search engines are included:

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

To edit or delete these, or add your own, right-click any web page and select “Keyword Search Settings”. Here you can add keywords and search URLs, and delete or modify the existing ones. Put `@@@` in the search URL to insert the search string, or use `%%%` if you want spaces to be encoded as `%20` instead of `+`. It is also possible to have keyword expansions without search strings, if you just want quick bookmarks.

The url for the `Default` keyword is used when no other keyword is provided, and what is entered into the address bar doesn't look like a URL. This is set to Googles “I am feeling lucky” search by default.

Limitations
-----------

- The search term cannot contain a colon symbol (:), as this makes Safari believe something is wrong with the URL protocol. Two typical uses for this is to use `site:example.com` in Google to limit your search to a specific domain, and `cache:example.com/article.html` to view the Google cache of a specific page. Workarounds for these two cases are provided: Any Google-search containing `site=` or `cache=` will convert the `=` to a `:`.
- Preferably, the settings should have been in the Extensions tab of the Safari preferences window, but the API for this is currently too limited to make this possible.

Installation
------------

1. Click the “Download”-button and download the extension file
2. Double-click it to install
3. There is no step 3 :-)