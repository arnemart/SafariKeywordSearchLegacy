var saveExpansions = function(keywordExpansions) {
    localStorage.clear();
    localStorage.setItem('___keywordExpansionsAreSaved', '1');
    for (var key in keywordExpansions) {
        if (keywordExpansions.hasOwnProperty(key) && key.indexOf('com.apple.WebInspector') === -1) {
            localStorage.setItem(key, keywordExpansions[key]);
        }
    }
};

var getExpansions = function() {
    var expansions = {},
        key;
    if (localStorage.getItem('___keywordExpansionsAreSaved')) {
        for (key in localStorage) {
            if (key !== '___keywordExpansionsAreSaved' && localStorage.hasOwnProperty(key) && key.indexOf('com.apple.WebInspector') === -1) {
                expansions[key] = localStorage.getItem(key);
            }
        }
    } else {
        expansions = {
            a: 'http://www.amazon.com/exec/obidos/search-handle-url/index%3Dblended%26field-keywords%3D@@@',
            d: 'http://duckduckgo.com/?q=@@@',
            down: 'http://downforeveryoneorjustme.com/@@@',
            e: 'http://search.ebay.com/search/search.dll?satitle=@@@',
            g: 'http://www.google.com/search?q=@@@',
            Default: "http://www.google.com/search?q=@@@&btnI=I'm+Feeling+Lucky",
            gm: 'http://maps.google.com/maps?oi=map&q=@@@',
            imdb: 'http://imdb.com/find?s=all&q=@@@',
            so: 'http://stackoverflow.com/search?q=@@@',
            w: 'http://en.wikipedia.org/wiki/Special:Search/%%%',
            wa: 'http://www.wolframalpha.com/input/?i=@@@',
            y: 'http://youtube.com/results?search_query=@@@'
        };

        saveExpansions(expansions);
    }
    return expansions;
};