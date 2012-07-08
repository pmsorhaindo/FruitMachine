window.onload = function(){
    var imageObj = new Image();
    imageObj.onload = function(){
        drawImage(this);
    };
    imageObj.src = "Joker.png";
};
 
function drawImage(imageObj){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
 
    var destX = 69;
    var destY = 50;
    var sourceWidth = imageObj.width;
    var sourceHeight = imageObj.height;
 
    context.drawImage(imageObj, destX, destY);
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