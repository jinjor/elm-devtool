chrome.devtools.panels.create("Elm",
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      var backgroundPageConnection = chrome.runtime.connect({
          name: "devtools-page"
      });
      var window = null;
      backgroundPageConnection.onMessage.addListener(function (message) {
        if(window) {
          window.postMessage({msg: message.msg}, '*');
        }
      });
      backgroundPageConnection.postMessage({
        name: 'init',
        tabId: chrome.devtools.inspectedWindow.tabId
      });

      panel.onShown.addListener(function(w) {
        window = w;
      });
      panel.onHidden.addListener(function() {
        window = null;
      });
    }
);
