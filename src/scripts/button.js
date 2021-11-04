class Button {
  constructor(object) {
    this.pos = object["pos"]
    this.width = 90;
    this.height = 40;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#F0E222'
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.closePath()
  }
  
  populate(ctx, label) {
    let x = (this.pos[0] + 45)
    let y = (this.pos[1] + 26)
    ctx.beginPath();
    ctx.font = '17px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black'
    ctx.fillText(label, x, y);
    ctx.closePath();
  }

  click(xclick, yclick) {
    
  }
}

export default Button;