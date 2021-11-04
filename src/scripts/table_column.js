class tableColumn {
  constructor(object) {
    this.pos = object["pos"];
    this.width = object["width"];
    this.height = 270
    this.color = "#F0E222";
  }

  draw(ctx) {
    ctx.beginPath(); 
    ctx.fillStyle = this.color;
    ctx.shadowColor = 'transparent'
    ctx.shadowOffsetY = 3;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.color = this.color
    ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.strokeStyle = '#F0E222';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath()
  }

  populate(ctx, payout, y, align = this.pos[0] + this.width - 4) {
    ctx.fillText(payout, align, y);
  }
}

export default tableColumn;