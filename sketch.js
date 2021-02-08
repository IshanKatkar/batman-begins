const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

    umbrellaImg = loadImage("images/walking_1.png")
    
}

function setup(){
    createCanvas(1600,1400,30,30)
    
    umbrella = new Umbrella(200,200,20,20);
    
}

function draw(){

    background(0)
         
    umbrella.display();
}   

