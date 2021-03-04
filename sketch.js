const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var boyImage, boy;
var backgroundIMG;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    backgroundIMG=loadImage("images/road.jpg")
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    boyImage = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
                            "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
                            "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
                            "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
}

function setup(){
    createCanvas(1500,800);

    engine = Engine.create();
    world = engine.world;

    for(i = 0; i< maxDrops ; i =i+1){
        rainDrop = new Drop(random(0,400), random(0,50));
        drops.push(rainDrop);
    }
    
    boy = createSprite(50,600,50,80);
    boy.addAnimation("walking",boyImage);
    boy.scale = 0.6
}

function draw(){
    
    background(backgroundIMG); 
    Engine.update(engine);
    spawnThunder();
     
    //if(frameCount% 60 == 0){
        for(i = 0;i<drops.length; i = i+1){
            console.log("raindrop");
            drops[i].display();
            drops[i].updateY();
        }
    //}
     
    
    
    drawSprites();
}   

function spawnThunder() {
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%70===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(25,50), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 20;
    }

    

    
}
   

