// Draw sunrise assignment by will

// Setup the canvas and the graphics context
let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Store images in variables
let cloudImg = document.getElementById("cloudImg")

// Global variables
cloud1X = 140;
cloud2X = 175;
sunY1 = 300;
sunSize = 23;
sunRed = 255;
sunGreen = 0


requestAnimationFrame(loop);
function loop() {
    // Draw sky
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 300);

    // Draw top half sun
    ctx.fillStyle = "rgb(" + sunRed + ", " + sunGreen + ", 0";
    ctx.beginPath();
    ctx.arc(200, sunY1, sunSize, 0, 2 * Math.PI);
    ctx.fill();

    // Draw ground
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    // Draw cloud images
    ctx.drawImage(cloudImg, cloud1X, 105)
    ctx.drawImage(cloudImg, cloud2X, 90)

    // Update Variables

    if (sunGreen < 255) {
        cloud1X--;
        cloud2X++;
        sunY1 -= 0.7;
        sunSize += 0.25
        sunGreen++;
    }



    requestAnimationFrame(loop);
}