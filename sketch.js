 var snow1
 var snow2
 var snow3
 var snow4
 var snow5
 var snow

function preload(){
 snow1=loadImage("snow1.jpg")
 snow2=loadImage("snow2.jpg")
 snow3=loadImage("snow3.jpg")
 snow4=loadImage("snow4.webp")
 snow5=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  snow=createSprite(400,200,10,10)
  snow.addImage("snow",snow3)

}

function draw() {
  background(snow1);  
  drawSprites();



}