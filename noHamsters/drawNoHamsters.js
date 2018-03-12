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
ctx.save();

// Draw our creepy blacked out hamster image
var hamsterImage = new Image();
hamsterImage.addEventListener("load", loadHandler, false);
hamsterImage.src = "luckyBlack.png";

function loadHandler(){
    ctx.drawImage(hamsterImage, 140, 120);
    // Draw circle
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 25;
    ctx.arc(200, 200, 150, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // Draw strikethrough
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 25;
    ctx.moveTo(90, 90);
    ctx.lineTo(310, 310);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    
    // NO HAMSTERS
    ctx.save();
    ctx.fillStyle = "red";
    ctx.font = "bold 35px Arial";
    ctx.fillText("NO HAMSTERS ALLOWED!", 0, 410);
    ctx.restore();
}

