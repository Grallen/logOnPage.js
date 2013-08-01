console = {
    log: function (text) {
        //$("#console-log").append($(consoleLine).html(""+text));
      var div = document.createElement('div');
    	div.innerHTML = ""+text;
    	console.buffer.push(div);
    	console.update();
    },
    DOM: null,
    update: function(){
			//alert(""+console.DOM);
    	if(console.DOM != null){
    		while(console.buffer.length > 0){
    			console.DOM.appendChild(console.buffer.splice(0,1)[0]);
    		}
    	}
    },
    buffer: [],
    line: '<p class=\"console-line\"></p>',
    tgt: '<div id="console-log" style="border: 1px black solid"><h2 style="margin:0;">Log:</h2><hr></div>',
    style: '<style>.console-line{font-family:monospace;margin:2px;}hr{margin-top:0;}</style>',
    init: function(){
    	var style = document.createElement('style');
    	style.innerHTML = console.style;
    	document.body.appendChild(style);
    	var div = document.createElement('div');
    	div.innerHTML = console.tgt;
    	document.body.appendChild(div);
    	console.DOM = div;
    	console.DOM = console.DOM.childNodes[0];
    	console.update();
    },
    wait: function(){
    	console.waiting = setInterval(function(){
    		if(document.body != null){
    			clearInterval(console.waiting);
       			console.init();
    		}
    	}, 5);
    }
};
console.wait();
