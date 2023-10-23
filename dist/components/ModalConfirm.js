"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ModalConfirmation = function ModalConfirmation(_ref) {
  var handleCancelClick = _ref.handleCancelClick,
    handleConfirmClick = _ref.handleConfirmClick,
    title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__box__button",
    onClick: handleCancelClick
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__box__button",
    onClick: handleConfirmClick
  }, "Confirm")));
};
var _default = exports.default = ModalConfirmation;