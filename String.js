class String{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.06,
          length: 20
      }
    //  this.bodyA=bodyA
      this.pointB=pointB
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }

  fly(){
    this.chain.bodyA = null;
}

  display(){
    var pointB = this.pointB;
    stroke(48,22,8)
    strokeWeight(4);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y,pointB.x,pointB.y);
  }
}