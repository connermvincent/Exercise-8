var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// Draw red circle
ctx.save();
ctx.fillStyle = "red";
ctx.arc(100, 100, 100, 0, 2*Math.PI, false);
ctx.fill();
ctx.restore();

// Draw DO NOT text
ctx.save();
ctx.fillStyle = "white";
ctx.font = "bold 35px Arial";
ctx.fillText("DO NOT", 32, 70);
ctx.restore();

// Draw white bar
// Define line qualities
ctx.save();
ctx.lineWidth = 25;
ctx.lineCap = "square";
ctx.strokeStyle = "white";

// Define line path
ctx.beginPath();
ctx.moveTo(20, 100);
ctx.lineTo(180, 100);
ctx.closePath();
ctx.stroke(); // Draw the stroke
ctx.restore();

// Draw ENTER text
ctx.save();
ctx.fillStyle = "white";
ctx.font = "bold 35px Arial";
ctx.fillText("ENTER", 40, 160);
ctx.restore();