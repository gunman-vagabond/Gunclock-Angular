export class Gunclock {
  _id: string;
  color: string;
  size: number;
  updated: string;

  constructor(_id, color, size, updated) {
    this._id = _id;
    this.color = color;
    this.size = size;
    this.updated = updated;
  }
}
