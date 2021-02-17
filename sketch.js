const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

  
    manImg=loadImage("images/Walking Frame/walking_1.png")
}

function setup(){
    createCanvas(1600,1400,30,30);
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,200,20,20);
    umbrella.addImage(manImg);
    
}

function draw(){

    background(0)
         
    umbrella.display();
}   

