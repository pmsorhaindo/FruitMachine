window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();
 
function animate(aObj){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
 
	// clear
	context.clearRect(0, 0, canvas.width, canvas.height);
 
    // update
	for (var i =0; i<aObj.length; i++)
	{
		var date = new Date();
		var time = date.getTime();
		var amplitude = 150;
		var period = 2000; // in ms
		var centerX = (canvas.height/ 2 - aObj[i].height / 2) -40;
		var nextY = amplitude *
		Math.sin(time * 2 * Math.PI / period) +
		centerX;
		aObj[i].y = nextY+(15*i);
		aObj[i].x = 50+(82*i);
	 	 
		// draw
		drawImage(aObj[i]);
	}
 
    // request new frame
    requestAnimFrame(function(){
        animate(aObj);
    });
}
 
window.onload = function(){

	var reelImg = new Array();
	var imgNames = ["Ace.png","King.png","Queen.png","Joker.png","Ten.png"];
	
	for (var i = 0; i<imgNames.length; i++)
	{
		var imageObj = new Image();
		imageObj.src = imgNames[i];	
		var iObj = {
			x: 250,
			y: 70,
			width: 100,
			height: 50,
			borderWidth: 5,
			img: imageObj
		};
		reelImg[i] = iObj;
	}
	
    animate(reelImg);
};



function drawImage(aObj){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
 
    var destX = aObj.x;
    var destY = aObj.y;
	var sourceWidth = aObj.img.width;
    var sourceHeight = aObj.img.height;
 
    context.drawImage(aObj.img, destX, destY);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height); // Ninjas!!!! grammar fail.
    var data = imageData.data;
 
    // to quickly iterate over all pixels, use a for loop like this
    for (var i = 0; i < data.length; i += 4) {
        var red = data[i]; // red
        var green = data[i + 1]; // green
        var blue = data[i + 2]; // blue
        // i+3 is alpha (the fourth element)
    }
 
    // or iterate over all pixels based on x and y coordinates
    // like this
    for (var y = 0; y < sourceHeight; y++) {
        // loop through each column
        for (var x = 0; x < sourceWidth; x++) {
            var red = data[((sourceWidth * y) + x) * 4];
            var green = data[((sourceWidth * y) + x) * 4 + 1];
            var blue = data[((sourceWidth * y) + x) * 4 + 2];
        }
    }
    // draw the altered image if we manipulated the image data
    context.putImageData(imageData, 0, 0);
}

