Safari Keyword Search
=====================

A quick'n'dirty extension taking advantage of the new SafariBeforeNavigateEvent introduced in Safari 5.1 to add keyword search to the url bar, now that Keywurl doesn't work anymore.

A user interface for defining searches, and a properly compiled extension, will be provided in time.

Installation and configuration
------------------------------

1. Install Safari 5.1
2. Download the code
3. Open the file SafariKeywordSearch.html
4. The variable `keywordExpansions` close to the top of the file contains the active keyword expansions, modify this as needed (use `@@@` to place the search string in the expanded url)
5. The entry `theDefault` in `keywordExpansions` contains the default search, which will be used if the URL entered doesn't look like a URL, and no keyword is provided.
6. Enable the Developer menu in Safari
7. Open the Extensions Builder from the develop menu
8. Click the `+` in the lower left corner, select “Add Extension...” and select the “SafariKeywordSearch.safariextension” folder
9. Click the “Install”-button in the upper right corner