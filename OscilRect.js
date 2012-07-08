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
 
function animate(myRectangle){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
 
    // update
    var date = new Date();
    var time = date.getTime();
    var amplitude = 150;
    var period = 2000; // in ms
    var centerX = canvas.width / 2 - myRectangle.width / 2;
    var nextX = amplitude *
    Math.sin(time * 2 * Math.PI / period) +
    centerX;
    myRectangle.x = nextX;
 
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
 
    // draw
    context.beginPath();
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.fillStyle = "#8ED6FF";
    context.fill();
    context.lineWidth = myRectangle.borderWidth;
    context.strokeStyle = "black";
    context.stroke();
 
    // request new frame
    requestAnimFrame(function(){
        animate(myRectangle);
    });
}
 
window.onload = function(){
    var myRectangle = {
        x: 250,
        y: 70,
        width: 100,
        height: 50,
        borderWidth: 5
    };
 
    animate(myRectangle);
};