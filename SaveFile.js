function imageOnClick(info, tab) {
	chrome.experimental.downloads.download({"url" : info.srcUrl,"saveAs":false});
}
  var id = chrome.contextMenus.create({"title": "Save Image to Downloads","contexts":["image"],"onclick": imageOnClick});
