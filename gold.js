class Gold{
    constructor(){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(800,380,50,50,options);
       // this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 150;
        this.height = 200;
        World.add(world,this.body);
         this.image = loadImage("Gold.png");

         //this.body = Bodies.rectangle(x,y,width,height)
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

