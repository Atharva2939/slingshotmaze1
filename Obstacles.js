class Obstacles{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        //pos.x=this.body.position.x;
        //pos.y=this.body.position.y;
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
    }
}