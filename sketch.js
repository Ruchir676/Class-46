var backgroundImage, goonImage, knightImage, motorcycle_img;
var ground, roof
var motorcycle; 



function preload() {
    backgroundImage = loadImage("images/back.png");
    goonImage = loadImage("images/goon.png");
    knightImage = loadImage("images/Knight.png");
    motorcycle_img = loadImage("images/motorcycle.png");

}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);

    backgr = createSprite(950,500,10,10);
    backgr.addImage(backgroundImage);
    backgr.scale=2;

    knight = createSprite(300,700,10,10);
    knight.addImage(knightImage);
    knight.scale=0.8;

    ground = createSprite(950,1000,windowWidth,10);
    ground.visible = false;

    roof = createSprite(950,375,windowWidth,10);
    roof.visible = false;
    
 

}

function draw() {
 background("white")
    backgr.velocityX=-3;
    if(backgr.x<200) {
    backgr.x=800;
    }

    if(keyWentDown(UP_ARROW)) {
        knight.velocityY=-3;
    }
    if(keyWentUp(UP_ARROW)) {
        knight.velocityY=0;
    }
    if(keyWentDown(DOWN_ARROW)) {
        knight.velocityY=3;
    }
    if(keyWentUp(DOWN_ARROW)) {
        knight.velocityY=0;
    }
    knight.collide(ground);
    

    spawnMotorcycle();
   

    drawSprites();
    knight.collide(roof);

}

function spawnMotorcycle() {
    if(frameCount%500===0) {
        motorcycle = createSprite(windowWidth-15, Math.round(random(400,950)),10,10);
        motorcycle.addImage(motorcycle_img);
        motorcycle.scale=0.5;
        motorcycle.velocityX=-25;


    }
}


