var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// Function draws a circle at a specified location, with a color and radius
function drawCircle(myContext, color, x, y, radius){
    myContext.save();
    myContext.beginPath();
    myContext.fillStyle = color;
    myContext.arc(x, y, radius, 0, 2*Math.PI, false);
    myContext.fill();
    myContext.closePath();
    myContext.restore();
}

// Offset from the edges for simplicity of code
ctx.translate(20, 20);

// Draw yellow diamond
// Define stroke attributes
ctx.save();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "6";
ctx.lineJoin = "round";

// Define path
ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(200, 100);
ctx.lineTo(100, 200);
ctx.lineTo(0, 100);
ctx.lineTo(100, 0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

// Draw rectangle
ctx.save();
ctx.fillStyle = "black";
ctx.fillRect(80, 40, 40, 120);
ctx.restore();

// Draw traffic light circles
drawCircle(ctx, "red", 100, 60, 15);
drawCircle(ctx, "yellow", 100, 100, 15);
drawCircle(ctx, "green", 100, 140, 15);
