class Button {
  constructor(object) {
    this.pos = object["pos"]
    this.color = "#FF5733";
    this.width = 90;
    this.height = 40;
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    ctx.color = this.color
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.stroke();
    ctx.closePath()
  }
  
  populate(ctx, label) {
    let x = (this.pos[0] + 45)
    let y = (this.pos[1] + 26)
    ctx.font = '17px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y);
  }

  click(xclick, yclick) {
    
  }
}

export default Button;