class Polygon {
    constructor(){
        this.body = Bodies.circle(100,200,5);
        World.add(world,this.body);

        this.image = loadImage("hexagon.png");
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,50,50);
    }
}