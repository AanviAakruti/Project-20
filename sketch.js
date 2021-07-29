
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    catImg2=loadImage("images/cat2.png","images/cat3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg1=loadImage("images/mouse1.png");
    mouseImg2=loadImage("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
  canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("catsleeping",catImg1);
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mousestanding",mouseImg1);
mouse.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catlast",catImg3);
    cat.x=300;
    cat.scale=0.2;
    cat.changeAnimation("catlast");

    mouse.adAnimation("mouselast",mouseImg3);
    mouse.scale=0.15;
    mouse.changeAnimation("mouselast");
}
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");

    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseteasing");
}
  //For moving and changing animation write code here


}
