$(function() {
  
  console.log("EXTENSION LOADED");

  /* === Handle Action === */
  var _action = list => {

    var _actioned = false;
    
    $.each(list, (index, value) => {
      
      if (value) {
        
        var _selector = $("td:contains('" + value + "')").parents("tr").find("input");
        if (_selector && _selector.length) _selector.prop("checked", true);
        if (_selector.length > 0) _actioned = true;
      }
      
    });

    return _actioned;

  };
  
  /* === Register to Receive Messages === */
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
    console.log("MESSAGE RECEIVED:", request);

    if (request && request.action == "action") _action(request.list) && sendResponse({actioned: true});

  });
  
});
