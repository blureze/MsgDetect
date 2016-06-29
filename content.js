function checkFocus() {
	console.log("checkFocus~");
	
	
		var divclass = document.getElementsByClassName("_1mf _1mj");
		if(divclass.length != 0) {
			console.log('find divclass');
			console.log(divclass.length);
			for (i = 0; i < divclass.length; i++) {
			    divclass[i].addEventListener('focus', function() {
			    	console.log("click");
			    });
			}	
		}
		else {
			console.log('cannot find divclass');
		}
	

	console.log('end of function');
}

// document.addEventListener('click', function() {
// 	console.log("click!");	
// });


// divclass.addEventListener('focus', function() {
// 	console.log("focused");
// });


var port = chrome.runtime.connect({name: "mychannel"});
port.postMessage({todo: "check focused"});
port.onMessage.addListener(function(msg) {
		
	if (msg.reply == "checking focused") {
		// port.postMessage({todo: "nothing"});
		console.log("NOOOOOOOOOO~");
		checkFocus();
	}
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log("contents");
    switch(message.type) {
        case "check-focused":
        	checkFocus();
        break;
    }
});