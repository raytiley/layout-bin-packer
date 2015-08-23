import Bin from './bin';
import Position from './position';
import Entry from './entry';

export default class ClassName extends Bin {
  constructor(content, elementWidth, elementHeight) {
    super(content);
    this._elementWidth =  elementWidth;
    this._elementHeight =  elementHeight;
  }

  flush() {
    //noop
  }

  isGrid(width) {
    return (Math.floor(width / this.widthAtIndex(0)) || 1) > 1;
  }

  visibleStartingIndex(topOffset, width, height) {
    topOffset = Math.min(topOffset, this.maxContentOffset(width, height));
    var columns = Math.floor(width / this.widthAtIndex(0)) || 1;

    return Math.floor(topOffset / this.heightAtIndex(0)) * columns;
  }

  numberVisibleWithin(topOffset, width, height, withPadding) {
    var startingIndex = this.visibleStartingIndex(topOffset, width, height);
    var columns = Math.floor(width / this.widthAtIndex(0)) || 1;
    var length = this.length();

    var rowHeight = this.heightAtIndex(0);
    var rows = Math.ceil(height / rowHeight);

    var maxNeeded = rows * columns;

    if (withPadding) {
      maxNeeded += columns;
    }

    var potentialVisible = length - startingIndex;

    return Math.max(Math.min(maxNeeded, potentialVisible), 0);
  }

  widthAtIndex(/* index */) {
    return this._elementWidth;
  }

  heightAtIndex(/* index */) {
    return this._elementHeight;
  }

  position(index, width) {
    var length = this.length();
    if (length === 0 || index > length) {
      rangeError(length, index);
    }

    var columns = Math.floor(width / this.widthAtIndex(index)) || 1;

    var x = index % columns * this.widthAtIndex(index) | 0;
    var y = Math.floor(index / columns) * this.heightAtIndex(index);

    return new Position(x, y);
  }

  height(visibleWidth) {
    if (typeof visibleWidth !== 'number') {
      throw new TypeError('height depends on the first argument of visibleWidth(number)');
    }
    var length = this.length();
    if (length === 0) { return 0; }

    var columnCount = Math.max(Math.floor(visibleWidth/this.widthAtIndex(0), 1));
    columnCount = columnCount > 0 ? columnCount : 1;
    var rows = Math.ceil(length/columnCount);
    var totalHeight = rows * this.heightAtIndex(0);

    return totalHeight;
  }
}
