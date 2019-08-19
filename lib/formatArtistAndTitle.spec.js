"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _formatArtistAndTitle = _interopRequireDefault(require("./formatArtistAndTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('formatArtistAndTitle', function () {
  describe('when title is not null', function () {
    it('and artist is null it renders title', function () {
      var titleText = (0, _formatArtistAndTitle["default"])(null, 'Bubble');
      (0, _expect["default"])(titleText).toBe('Bubble');
    });
    it('and artist is not null it renders title and artist', function () {
      var titleText = (0, _formatArtistAndTitle["default"])('Kalimba', 'Bubble');
      (0, _expect["default"])(titleText).toBe('Kalimba - Bubble');
    });
  });
  it('when title is null it just renders the artist', function () {
    var titleText = (0, _formatArtistAndTitle["default"])('Kalimba', null);
    (0, _expect["default"])(titleText).toBe('Kalimba');
  });
  it('when artist and title are null it renders an empty string', function () {
    var titleText = (0, _formatArtistAndTitle["default"])(null, null);
    (0, _expect["default"])(titleText).toBe('');
  });
});