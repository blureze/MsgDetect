function checkFocus() {
	console.log("checkFocus~");
	chatclass = document.getElementsByClassName("fbNub _50-v _50mz _50m_ opened");
	console.log(chatclass.length);
	if ($(chatclass).hasClass('focusedTab')) {
	    console.log('class name change');

	    /*get receiver's name*/
	    thisChatclass = document.getElementsByClassName("fbNub _50-v _50mz _50m_ opened focusedTab")[0];
	    namediv = thisChatclass.getElementsByClassName("name fwb")[0];
	    namespan = namediv.getElementsByTagName("span")[0];
	    console.log($.trim($(namespan).text()));
	    var receiver_name = $.trim($(namespan).text());

	    /*get input content*/
	}

	setTimeout(checkFocus, 2000);	
}

checkFocus();

// var port = chrome.runtime.connect({name: "mychannel"});
// port.postMessage({todo: "check focused"});
// port.onMessage.addListener(function(msg) {
		
// 	if (msg.reply == "checking focused") {
// 		// port.postMessage({todo: "nothing"});
// 		console.log("NOOOOOOOOOO~");
// 		checkFocus();
// 	}
// });


/*chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log("contents");
    switch(message.type) {
        case "check-focused":
        	checkFocus();
        break;
    }
});*/