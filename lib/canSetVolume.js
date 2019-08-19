"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Some IOS versions don't allow manually changing volume or mute
var _default = function _default() {
  var audio = new window.Audio();
  audio.volume = 0.5;
  return audio.volume === 0.5;
};

exports["default"] = _default;