class Log{
constructor(x, y) {
    var options = {
       isStatic: true
    }
    this.body = Bodies.rectangle(x, y, 300, 20, options);
    this.width = 300;
    this.height = 20;
    this.image = loadImage("wood2.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}