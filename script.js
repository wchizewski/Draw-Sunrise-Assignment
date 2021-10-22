// Draw sunrise assignment by will

// Setup the canvas and the graphics context
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Store images in variables
let cloudImg = document.getElementById("cloudImg")

// Draw sky
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300);

// Draw ground
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

// Draw red half sun
ctx.fillStyle= "red";
ctx.beginPath();
ctx.arc(200, 300, 23, 0, Math.PI, true);
ctx.fill();

// Draw cloud images
ctx.drawImage(cloudImg, 140, 105)
ctx.drawImage(cloudImg, 175, 90)
