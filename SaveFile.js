// A generic onclick callback function.
function imageOnClick(info, tab) {
	//alert(JSON.stringify(info));
	chrome.experimental.downloads.download({"url" : info.srcUrl,"saveAs":false});
}
  var id = chrome.contextMenus.create({"title": "Save Image to Downloads","contexts":["image"],"onclick": imageOnClick});
