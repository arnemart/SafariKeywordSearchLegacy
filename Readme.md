Safari Keyword Search
=====================

**Not supported in Safari 12/macOS 10.14 Mojave:** Safari Keyword Search is written using the now “legacy” Safari extension API. Starting with Safari 12 these extensions are deprecated, and all new Safari extensions must use the new Safari App Extensions API. This new API does not incude access to the address bar in the same way as the old API, which means that this extension cannot be ported and will be unsupported going forward. Sorry about that.

As a workaround you can use [Search Alias](https://safari-extensions.apple.com/details/?id=com.damiancarrillo.search-alias-RADJYLEN7P). Requires manually entering all your aliases again.

----

Safari Keyword Search is a simple extension for Safari 5.1 and above that can change the default Safari search engine and enables keyword searching from the address bar. This is a simple but powerful feature that gives you access to several search engines using simple keywords. For example, you can search Wikipedia for information on monkeys by typing `w monkeys` in the address bar.

The following searches are included in the default set:

- **a**: amazon.com
- **d**: duckduckgo.com
- **down**: downforeveryoneorjustme.com
- **e**: ebay.com
- **g**: google.com
- **gl**: google.com (“I’m feeling lucky”)
- **gm**: maps.google.com
- **imdb**: imdb.com
- **so**: stackoverflow.com
- **w**: en.wikipedia.org
- **wa**: wolframalpha.com
- **y**: youtube.com

Any search engine can be set as the default. The default search engine will be used when no keyword is provided. The default, uhm, default is regular Google search.

To edit or delete the search engines, or add your own, right-click any web page and select “Keyword Search Settings”. Here you can add keywords and search URLs, and delete or modify the existing ones. Put `@@@` in the search URL to insert the search string, or use `%%%` if you want spaces to be encoded as `%20` instead of `+`. It is also possible to have keyword expansions without search strings, if you just want quick bookmarks.


Limitations
-----------

- In Safari 5.1, the search term cannot contain a colon symbol (:), as this makes Safari believe something is wrong with the URL protocol. Two typical uses for this is to use `site:example.com` in Google to limit your search to a specific domain, and `cache:example.com/article.html` to view the Google cache of a specific page. Workarounds for these two cases are provided: Any Google-search containing `site=` or `cache=` will convert the `=` to a `:`.

Installation
------------

1. [Download the extension file](http://safarikeywordsearch.aurlien.net/SafariKeywordSearch.safariextz)
2. Double-click it to install
3. There is no step 3 :-)
