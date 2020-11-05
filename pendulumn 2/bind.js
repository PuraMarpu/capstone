class thread{
    constructor(bodyA,pointB){
        var op={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.9,
            lenght:100
        }

        this.rope = bind.create(op);
        this.point = pointB;

        World.add(world,this.rope);
    }
    const(){
        var pos = this.rope.bodyA.position;
        var posp = this.point;
        push();
        stroke("white");
        strokeWeight(3);
        line(pos.x,pos.y-40,posp.x,posp.y);
        pop();
    }
}