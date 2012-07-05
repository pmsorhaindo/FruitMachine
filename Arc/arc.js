      window.onload = function() {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 75;
        var startAngle = 1.1 * Math.PI;
        var endAngle = 1.9 * Math.PI;
        var counterClockwise = false;

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = 15;
        // line color
        context.strokeStyle = "black";
        context.stroke();
      };
