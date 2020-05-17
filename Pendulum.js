class Pendulum extends BaseClass {
  constructor(x,y){  
    super(x,y,50,50);
    this.image = loadImage("sprites/Untitled.png");

  }

  display() {
    if(keyCode===32){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    }

    if(keyCode===13){
      this.body.velocityX = 5;
      //this.body.position.y = 220;
      }
    super.display();
  }
}