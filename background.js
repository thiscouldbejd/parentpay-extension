/* <!-- Set Up Event Handlers --> */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
    if (request.action == "update" && request.data) {
      
      var _list = request.data.indexOf(",") > 0 ? 
          request.data.split(",") : request.data.split(/\r?\n/);
      
          chrome.tabs.query({active: true, currentWindow: true, url: "https://*.parentpay.com/*"}, tabs => 
                        tabs.forEach(tab => {
                          chrome.tabs.sendMessage(tab.id, {"action": "action", "list": _list}, response => sendResponse(response));
            
                          /*
                          chrome.tabs.executeScript(tab.id, {file:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"}, 
                            result => chrome.tabs.sendMessage(tab.id, {"action": "action", "list": _list}, response => sendResponse(response)));
                          */
            
                        }));
      
      return true;
      
    } else {
      
      return false;
      
    }
  
});