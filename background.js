// send a message to the content script
function checkFocused() {
    chrome.tabs.query(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "check-focused"});
    });
}

// // listening for an event / long-lived connections
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "mychannel");
  port.onMessage.addListener(function(msg) {
    if (msg.todo == "check focused") {
    	port.postMessage({reply: "checking focused"});
    	// checkFocused();
    }
  });
});