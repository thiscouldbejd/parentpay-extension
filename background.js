/* <!-- Set Up Event Handlers --> */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action == "update" && request.data) {
      var _list = request.data.indexOf(",") > 0 ? 
          request.data.split(",") : request.data.split(/\r?\n/);
      chrome.tabs.query({url: "*://*/*"}, tabs => 
                        tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {"action": "action", "list": _list})));
    }
});