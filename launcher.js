class Launcher{
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
        }
       this.pointB=pointB;
      this.launch= Constraint.create(options);
       World.add(world,launch);
        
    }
    display(){
      var pointA=this.launch.bodyA.position;
      var pointB=this.pointB.position;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x,point.y);
    }
}