Safari Keyword Search
=====================

A quick'n'dirty extension taking advantage of the new SafariBeforeNavigateEvent introduced in Safari 5.1 to add keyword search to the url bar, now that Keywurl doesn't work anymore.

A user interface for defining searches, and a properly compiled extension, will be provided in time.

Installation and configuration
------------------------------

1. Install Safari 5.1
2. If you don't have one, get a Safari developer certificate [from Apple](http://developer.apple.com/devcenter/safari/index.action)
3. Download the code
4. Open the file SafariKeywordSearch.html
5. The variable `keywordExpansions` close to the top of the file contains the active keyword expansions, modify this as needed (use `@@@` to place the search string in the expanded url)
6. The entry `theDefault` in `keywordExpansions` contains the default search, which will be used if the URL entered doesn't look like a URL, and no keyword is provided.
7. Enable the Developer menu in Safari
8. Open the Extensions Builder from the develop menu
9. Click the `+` in the lower left corner, select “Add Extension...” and select the “SafariKeywordSearch.safariextension” folder
10. Click the “Install”-button in the upper right corner