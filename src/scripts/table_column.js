class tableColumn {
  constructor(object) {
    this.pos = object["pos"];
    this.width = object["width"];
    this.color = "#FFFF00";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], this.width, 60);
    ctx.stroke();
  }

  populate(ctx, payout, y) {
    let right = this.pos[0] + this.width - 2
    ctx.font = '5px Arial';
    ctx.color = this.color
    ctx.textAlign = 'right';
    ctx.fillText(payout, right, y);
  }
}

export default tableColumn;