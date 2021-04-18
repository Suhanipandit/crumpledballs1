class Paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.body=Bodies.circle(x,y,35,options)
      this.image=loadImage("paper.png")
      this.radius=80
      World.add(world,this.body)
    };
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    }
    };