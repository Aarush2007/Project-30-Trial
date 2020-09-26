class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;

        this.Visibility = 255;
        this.color = color(random(0,255),random(0,255),random(0,255));

        this.image = loadImage("block.png");

        
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        if (this.body.speed < 3){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(this.color);
            rectMode(CENTER);
            image(this.image,0,0,this.w,this.h);
            pop();
        }

        else {
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image,pos.x,pos.y,50,50);
            pop();
        }
    }
}