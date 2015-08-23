// @param height: "known to have atleast this might height available"
export default class Entry {
  constructor(height, width, x, y) {
    this.height   = height;
    this.width    = width;
    this.position = new Position(x, y);
  }
}
