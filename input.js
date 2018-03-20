$(function() {
  if (autosize) autosize($("textarea.resizable"));
  $("#list_Form").submit(event => {
    var data = $("#list_Form").serializeArray();
    chrome.runtime.sendMessage({"action" : "update", "data": data[0].value}, response => {});
    event.preventDefault();
  });
});