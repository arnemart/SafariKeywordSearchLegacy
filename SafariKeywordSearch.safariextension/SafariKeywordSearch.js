(function() {
    
    var settingsDivId = 'SafariKeywordSearchSettingsDiv___',
        overlayId = 'SafariKeywordSearchSettingsDivOverlay___',
        separatorId = 'SafariKeywordSearchSettingsDivSeparator___';
    
    var cancel = function() {
        document.body.removeChild(document.getElementById(settingsDivId));
        document.body.removeChild(document.getElementById(overlayId));
    };
    
    var saveSettings = function(settings) {
        safari.self.tab.dispatchMessage('SaveKeywordSearchSettings', [serializeSettings()]);
        cancel();
    };
    
    var serializeSettings = function() {
        var settings = {},
            rows = document.querySelectorAll('#' + settingsDivId + ' div'),
            i, j;
        
        for (i = 0, j = rows.length; i < j; i++) {
            if (rows[i].getAttribute('id') !== separatorId) {
                settings[rows[i].querySelectorAll('input')[0].value] = rows[i].querySelectorAll('input')[1].value;
            }
        }
        return settings;
    };
    
    var deleteSearch = function(row) {
        document.getElementById(settingsDivId).removeChild(row);
    };
    
    var addRow = function() {
        var row = document.createElement('div'),
            shortcut = document.createElement('input'),
            expansion = document.createElement('input'),
            deleteRowButton = document.createElement('input');
            
        shortcut.setAttribute('class', 'SafariKeywordSearchSettingsShortcut___');
        expansion.setAttribute('class', 'SafariKeywordSearchSettingsExpansion___');
        expansion.setAttribute('value', 'http://');
        deleteRowButton.setAttribute('type', 'button');
        deleteRowButton.setAttribute('value', 'Delete');
        deleteRowButton.addEventListener('click', function() {
            deleteSearch(row);
        });
        row.appendChild(shortcut);
        row.appendChild(expansion);
        row.appendChild(deleteRowButton);
        document.getElementById(settingsDivId).insertBefore(row, document.getElementById(separatorId));
    };
    
    var exportSettings = function() {
        prompt('Copy the text below and store it in a text file on, like, yor dropbox or something.', JSON.stringify(serializeSettings()));
    };
    
    var importSettings = function() {
        var newSettings = prompt('Paste your settings here:', '');
        try {
            var settings = JSON.parse(newSettings);
            cancel();
            openKeywordEditor(settings);
        } catch (e) {
            alert('Syntax error in settings. Try again.');
        }
    };
    
    var openKeywordEditor = function(unsortedSettings) {
        var overlayDiv = document.createElement('div'),
            settingsDiv = document.createElement('div'),
            tempArray = [],
            settings = {},
            key, i, j;
        
        for (key in unsortedSettings) {
            if (unsortedSettings.hasOwnProperty(key)) {
                tempArray.push(key);
            }
        }
        
        tempArray.sort();
        
        for (i = 0, j = tempArray.length; i < j; i++) {
            settings[tempArray[i]] = unsortedSettings[tempArray[i]];
        }
        
        settingsDiv.setAttribute('id', settingsDivId);    
        overlayDiv.setAttribute('id', overlayId);
        for (key in settings) {
            (function() {
                if (settings.hasOwnProperty(key)) {
                    var row = document.createElement('div'),
                        shortcut = document.createElement('input'),
                        expansion = document.createElement('input'),
                        deleteRowButton = document.createElement('input');
                    shortcut.setAttribute('value', key);
                    expansion.setAttribute('value', settings[key]);
                    shortcut.setAttribute('class', 'SafariKeywordSearchSettingsShortcut___');
                    expansion.setAttribute('class', 'SafariKeywordSearchSettingsExpansion___');
                    deleteRowButton.setAttribute('type', 'button');
                    deleteRowButton.setAttribute('value', 'Delete');
                    deleteRowButton.addEventListener('click', function() {
                        deleteSearch(row);
                    });
                    row.appendChild(shortcut);
                    row.appendChild(expansion);
                    row.appendChild(deleteRowButton);
                    settingsDiv.appendChild(row);
                }
            })();
        }
        
        var separator = document.createElement('div');
        separator.setAttribute('id', separatorId);
        
        var addRowButton = document.createElement('input');
        addRowButton.setAttribute('type', 'button');
        addRowButton.setAttribute('value', 'Add search');
        addRowButton.addEventListener('click', addRow);
        
        var cancelButton = document.createElement('input');
        cancelButton.setAttribute('type', 'button');
        cancelButton.setAttribute('value', 'Cancel');
        cancelButton.addEventListener('click', cancel);
        
        overlayDiv.addEventListener('click', cancel);
        
        var saveButton = document.createElement('input');
        saveButton.setAttribute('type', 'button');
        saveButton.setAttribute('value', 'Save settings');
        saveButton.addEventListener('click', saveSettings);
        
        var exportButton = document.createElement('input');
        exportButton.setAttribute('type', 'button');
        exportButton.setAttribute('value', 'Export settings');
        exportButton.addEventListener('click', exportSettings);
        
        var importButton = document.createElement('input');
        importButton.setAttribute('type', 'button');
        importButton.setAttribute('value', 'Import settings');
        importButton.addEventListener('click', importSettings);
        
        settingsDiv.appendChild(separator);
        settingsDiv.appendChild(addRowButton);
        settingsDiv.appendChild(cancelButton);
        settingsDiv.appendChild(exportButton);
        settingsDiv.appendChild(importButton);
        settingsDiv.appendChild(saveButton);
        
        document.body.appendChild(overlayDiv);
        document.body.appendChild(settingsDiv);
        window.scrollTo(0, 0);
    };
    
    safari.self.addEventListener('message', function(message) {
        if (message.name == 'KeywordSearchSettings' && ! document.getElementById(settingsDivId)) {
            openKeywordEditor(message.message[0]);
        }
    }, false);
})();