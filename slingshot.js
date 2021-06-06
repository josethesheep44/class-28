class Slingshot{
    constructor(bodyA, pointOnCanvas){
        var options = {
            bodyA: bodyA,
            pointB: pointOnCanvas,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointOnCanvas
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly() {
        this.chain.bodyA = null
    }
    display(){
        if (this.chain.bodyA!=null) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}