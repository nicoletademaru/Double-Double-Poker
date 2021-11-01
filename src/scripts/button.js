class Button {
  constructor(object) {
    this.pos = object["pos"]
    this.color = "#FF5733";
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    ctx.color = this.color
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 90, 40);
    ctx.stroke();
  }
  
  populate(ctx, label) {
    let x = (this.pos[0] + 45)
    let y = (this.pos[1] + 26)
    ctx.font = '17px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y);
  }
}

export default Button;