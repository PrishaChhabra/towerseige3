class Polygon {
    constructor(x, y, r) {
      var options = {
        'restitution':0.7,
        'density' : 0.5,
        'friction':0.6
         
          

      }
      this.x=x;
     this.y=y;
      this.r=r;
      this.polygonimage=loadImage("sprites/Polygon.png")
     
      
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      
      translate(pos.x, pos.y);
     
      imageMode(CENTER);
       
      
      fill("blue")
      image(this.polygonimage,0,0,100,30)
      pop();
   
    }
  };