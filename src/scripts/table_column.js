class tableColumn {
  constructor(object) {
    this.pos = object["pos"];
    this.width = object["width"];
    this.color = "#FFFF09";
  }

  draw(ctx) {
    ctx.beginPath(); 
    ctx.fillStyle = this.color;
    ctx.color = this.color
    ctx.rect(this.pos[0], this.pos[1], this.width, 270);
    ctx.strokeStyle = '#FFFF09';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath()
  }

  populate(ctx, payout, y, align = this.pos[0] + this.width - 4) {
    ctx.font = '21px Arial';
    ctx.fillText(payout, align, y);
  }
}

export default tableColumn;