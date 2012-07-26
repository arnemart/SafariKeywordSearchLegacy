(function() {
    if (window === top) {
        safari.self.addEventListener('message', function(message) {
            if (message.name == 'KeywordSearchEvalJS') {
                eval(message.message[0]);
                history.replaceState(message.message[1]);
            }
        }, false);
    }
})();