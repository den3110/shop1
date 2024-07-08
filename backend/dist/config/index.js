"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var normalizedPath = __dirname;
var data = {};
_fs["default"].readdirSync(normalizedPath).forEach(function (file) {
  if (file != 'index.js') {
    data[file.split('.')[0]] = require(_path["default"].join(__dirname, file))['default'];
  }
});
var _default = exports["default"] = data;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZnMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9wYXRoIiwibm9ybWFsaXplZFBhdGgiLCJfX2Rpcm5hbWUiLCJkYXRhIiwiZnMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlIiwic3BsaXQiLCJwYXRoIiwiam9pbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG52YXIgbm9ybWFsaXplZFBhdGggPSBfX2Rpcm5hbWU7XHJcbnZhciBkYXRhID0ge31cclxuXHJcbmZzLnJlYWRkaXJTeW5jKG5vcm1hbGl6ZWRQYXRoKS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgIGlmKGZpbGUgIT0gJ2luZGV4LmpzJyl7XHJcbiAgICAgICAgZGF0YVtmaWxlLnNwbGl0KCcuJylbMF1dID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSlbJ2RlZmF1bHQnXTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLEdBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLEtBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUVBLElBQUlFLGNBQWMsR0FBR0MsU0FBUztBQUM5QixJQUFJQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRWJDLGNBQUUsQ0FBQ0MsV0FBVyxDQUFDSixjQUFjLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLFVBQVNDLElBQUksRUFBRTtFQUNsRCxJQUFHQSxJQUFJLElBQUksVUFBVSxFQUFDO0lBQ2xCSixJQUFJLENBQUNJLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdULE9BQU8sQ0FBQ1UsZ0JBQUksQ0FBQ0MsSUFBSSxDQUFDUixTQUFTLEVBQUVLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0VBQzdFO0FBQ0osQ0FBQyxDQUFDO0FBQUMsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBRVlULElBQUkiLCJpZ25vcmVMaXN0IjpbXX0=