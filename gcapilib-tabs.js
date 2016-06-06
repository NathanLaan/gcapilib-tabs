//
// TODO: Return generic list.
//
// TODO: Objects?
//
//
//
function gcapilib_GetAllTabs(){
    chrome.windows.getAll({populate: true}, function(windows) {
        //each window will contain an array of tabs in it
        if(windows !== null){
            pages = new Array();
            var list = $('#browserTabsList')[0];
            list.options.length = 0; 
            for (var i=0 ; i<windows.length ; i++) {
                for (var j=0; j<windows[i].tabs.length; j++) {
                    if( windows[i].tabs[j].title !== "AthLib") {
                        list.options[list.options.length] = new Option(windows[i].tabs[j].title, windows[i].tabs[j].id);
                    }
                };
            };

            chrome.tabs.query({'active': true, 'currentWindow':true}, function(tab) {
                if( tab !== null && tab.length > 0){
                    for (var i=0 ; i<list.options.length ; i++) {
                        if( list.options[i].value == tab[0].id ) {
                            list.options[i].defaultSelected = true;
                            list.selectedIndex = i;
                        }
                    };
                }
            });

        }
    });
}