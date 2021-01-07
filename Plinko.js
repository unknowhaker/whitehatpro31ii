class Plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{isStatic: true});
        //this.colour = color(random(0,255),random(0,255),random(0,25))
        World.add(world,this.body);
        this.radius = 10;
        //this.image = loadImage("polygon.png");
    }
    display(){
        fill("white"),
        //imageMode(CENTER);
        //image(this.image,this.body.position.x,this.body.position.y,this.radius*3,this.radius*3);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}