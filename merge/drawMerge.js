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
ctx.moveTo(100, 230);
ctx.lineTo(100, 180);
ctx.moveTo(100, 176); // A kludge to make this not look as bizzare
ctx.lineTo(120, 150);
ctx.moveTo(120, 150); // Likewise.
ctx.lineTo(120, 100);
ctx.closePath();
ctx.stroke();
/*
I have no idea why this is so screwed up. I've been fiddling with it for hours.
I give up. I need to get help.
*/


// Draw straight black line
ctx.beginPath();
ctx.moveTo(160, 230);
ctx.lineTo(160, 100);
ctx.closePath();
ctx.stroke();
// You tell me why these end up having different heights despite having identical attributes and y-values. I have no clue.