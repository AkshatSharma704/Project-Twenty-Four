class Paper{
    constructor(x,y,width,height)
    {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(100,600,5, options);
      
      World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        fill("green");
        ellipse(0,0,this.width,this.height); 
        pop();
    }
}