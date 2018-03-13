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

// Draw red triangle border
ctx.save();
ctx.strokeStyle = "red";
ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(300, 250);
ctx.lineTo(0, 250);
ctx.lineTo(150, 0);
ctx.closePath();
ctx.stroke();
ctx.restore();

// Draw bent black line
ctx.save();
ctx.strokeStyle = "black";
ctx.lineWidth = 16;
ctx.lineCap = "square";
ctx.lineJoin = "bevel";
ctx.beginPath();
ctx.moveTo(110, 220);
ctx.lineTo(110, 160);
ctx.lineTo(130, 130);
ctx.lineTo(130, 80);
ctx.stroke();
ctx.closePath();


// Draw straight black line
ctx.beginPath();
ctx.moveTo(170, 220);
ctx.lineTo(170, 80);

ctx.stroke();
