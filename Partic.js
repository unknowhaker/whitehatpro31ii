class Partic{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5,{restitution:0.3, friction: 0.5, density:1.2});
        this.radius = 5;
        this.colour = color(random(0,255),random(0,255),random(0,25))
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}