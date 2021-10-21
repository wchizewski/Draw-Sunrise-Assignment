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

