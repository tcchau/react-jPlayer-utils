"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(artist, title) {
  var titleText = '';

  if (artist) {
    titleText += "".concat(artist);
  }

  if (title) {
    if (artist) {
      titleText += ' - ';
    }

    titleText += "".concat(title);
  }

  return titleText;
};

exports["default"] = _default;