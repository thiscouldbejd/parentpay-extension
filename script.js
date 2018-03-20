/* === Handle Action === */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.action == "action")
    $.each(request.list, (index, value) => $("td:contains('" + value + "')").parents("tr").find("input")[0].checked = true);
});