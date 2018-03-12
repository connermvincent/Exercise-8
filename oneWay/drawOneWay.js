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

// Draw blue rectangle w/ white edge
ctx.save();
ctx.fillStyle = "#0099ff";
ctx.strokeStyle = "#0099ff";
ctx.lineWidth = "20";
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(0, 0); // Unnecessary, but I like to be safe.
ctx.lineTo(200, 0);
ctx.lineTo(200, 300);
ctx.lineTo(0, 300);
ctx.lineTo(0, 0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.lineWidth = "5";
ctx.strokeStyle = "white";
ctx.stroke();
ctx.restore();

// Draw interior arrow
ctx.save();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(100, 40);
ctx.lineTo(150, 100);
ctx.lineTo(120, 100);
ctx.lineTo(120, 260);
ctx.lineTo(80, 260);
ctx.lineTo(80, 100);
ctx.lineTo(50, 100);
ctx.closePath();
ctx.fill();
ctx.restore();

// Draw ONE WAY text
ctx.save();
ctx.fillStyle = "#0099ff";
ctx.font = "bold 35px Arial";
ctx.fillText("ONE WAY", 20, 350);
ctx.restore();