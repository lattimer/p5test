var xcor = 600;
var ycor = 200;
var playerSize = 5;
var horVelMax = 16;
var horAcc = 2;
var horDec = 2;
var horVel = 0;
var canvasWidth = 1200;
var canvasHeight = 300;
var platformWidth = 0;
var platformX = 0;
var platformY = 300;
var platformVel = 2;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    stroke(255);
    strokeWeight(5);
    frameRate(15);
    platformWidth = random(50,100);
    platformX = random(0, canvasWidth - platformWidth);
}

function draw() {
    background(0);
    stroke(255);
    ellipse(xcor, ycor, playerSize, playerSize);
    xcor += horVel;
    movement();
    updatePlatforms();
    testCollision();
}

function updatePlatforms() {
    line(platformX, platformY, platformX + platformWidth, platformY);
    // line (500, platformY, 550, platformY);
    platformY -= platformVel;
}

function testCollision() {
    if (xcor >= platformX && xcor <= (platformX + platformWidth)) {
        if (ycor + 7 >= platformY && ycor + 7 <= (platformY + platformVel)) {
            platformVel = 0;
        }
    }
}

function movement() {
    if (keyIsDown(LEFT_ARROW)) {
        horVel -= horAcc;
        if (horVel <= -horVelMax) {
            horVel = -horVelMax;
        }
    } else {
        if (horVel < 0) {
            horVel += horDec;
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        horVel += horAcc;
        if (horVel >= horVelMax) {
            horVel = horVelMax;
        }
    } else {
        if (horVel > 0) {
            horVel -= horDec;
        }
    }
}
