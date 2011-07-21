console.log(safari);
safari.self.addEventListener('SafariBeforeNavigateEvent', function(evt) {
    evt.preventDefault();
    console.log(evt);
});
