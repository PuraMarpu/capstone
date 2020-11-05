class cradle{
    constructor(x){
       var rest={
        restitution:0.7,
        friction:0.4,
        density:0.4
       }
       this.newton = Bodies.circle(x,550,40);

       World.add(world,this.newton);
    }
    show(){
        var pos = this.newton.position;
        
        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,40,40);
        pop();
    }
}