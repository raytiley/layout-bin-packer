import Utils from './utils';

export default class Bin {
  constructor(content, width) {
    this.width = width || 0;
    this.content = content;
  }

  //abstract
  objectAt(content, index) {
    return collection[index];
  }

  // abstract: return coordinates of element at index.
  //
  // @param index: index of the element in content
  // @param width: viewport width.
  // @returns {x, y} coordinates of element at index.
  //
  // May reset cached viewport width.
  position() {
    return Utils.mustImplement('position');
  }

  // abstract: reset internal state to be anchored at index.
  // @param index: index of the element in content
  flush() {
    return Utils.mustImplement('flush');
  }

  // abstract: return total content height given viewport width.
  // @param width: viewport width
  //
  // May reset cached viewport width.
  height() {
    return Utils.mustImplement('height');
  }

  // abstract: true if layout places more than one object on a line.
  isGrid() {
    return Utils.mustImplement('isGrid');
  }

  // abstract: returns number of elements in content.
  length() {
    return this.content.length;
  }

  // maximum offset of content wrt to viewport
  // The amount by which content (after being layed out) is taller than
  // the viewport.
  maxContentOffset(width, height) {
    var contentHeight = this.height(width);
    var maxOffset = Math.max(contentHeight - height, 0);
    return maxOffset;
  }

  // abstract: returns index of first visible item.
  // @param topOffset: scroll position
  // @param width: width of viewport
  // @param height: height of viewport
  visibleStartingIndex() {
    return Utils.mustImplement('visibleStartingIndex');
  }

  // abstract: returns number of items visible in viewport.
  // @param topOffset: scroll position
  // @param width: width of viewport
  // @param height: height of viewport
  numberVisibleWithin() {
    return Utils.mustImplement('numberVisibleWithin');
  }

  heightAtIndex(index) {
    return this.content[index].height;
  }

  widthAtIndex(index) {
    return this.content[index].width;
  }

}
