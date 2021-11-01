class EventClick {
  constructor(object) {
    this.pos = object["pos"];
    this.width = object["width"];
    this.height = object["height"];
  }

  isValid(object ,xclick, yclick) {
    let x = object.pos[0];
    let y = object.pos[1]
    let x2 = object.pos[0] + object.width;
    let y2 = object.pos[1] + object.height;

    if (xclick < x || xclick > x2 && yclick < y ||yclick > y2) {
      return false;
    }
    return true;
  }
}