"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return (0, _recompose.compose)((0, _recompose.getContext)({
    id: _propTypes["default"].string
  }), _reactRedux.connect.apply(void 0, arguments));
};

exports["default"] = _default;