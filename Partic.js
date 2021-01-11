class Partic{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{restitution:0.3, friction: 0.5, density:1.2});
        this.radius = r;
        this.colour = color(random(0,255),random(0,255),random(0,255))
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
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
