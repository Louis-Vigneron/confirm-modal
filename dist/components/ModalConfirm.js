"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalConfirmation;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalConfirmation(_ref) {
  var transitionButton = _ref.transitionButton,
    marginTitle = _ref.marginTitle,
    heightTitle = _ref.heightTitle,
    widthTitle = _ref.widthTitle,
    borderRadiusTitle = _ref.borderRadiusTitle,
    borderStyleTitle = _ref.borderStyleTitle,
    paddingTitle = _ref.paddingTitle,
    displayTitle = _ref.displayTitle,
    backgroundColorTitle = _ref.backgroundColorTitle,
    textColorTitle = _ref.textColorTitle,
    fontSizeTitle = _ref.fontSizeTitle,
    fontFamilyTitle = _ref.fontFamilyTitle,
    marginButton = _ref.marginButton,
    heightButton = _ref.heightButton,
    widthButton = _ref.widthButton,
    margin = _ref.margin,
    handleCancelClick = _ref.handleCancelClick,
    handleConfirmClick = _ref.handleConfirmClick,
    title = _ref.title,
    fontFamily = _ref.fontFamily,
    fontSize = _ref.fontSize,
    textColor = _ref.textColor,
    backgroundColor = _ref.backgroundColor,
    display = _ref.display,
    padding = _ref.padding,
    borderStyle = _ref.borderStyle,
    borderRadius = _ref.borderRadius,
    fontFamilyButton = _ref.fontFamilyButton,
    fontSizeButton = _ref.fontSizeButton,
    textColorButton = _ref.textColorButton,
    backgroundColorButton = _ref.backgroundColorButton,
    paddingButton = _ref.paddingButton,
    borderStyleButton = _ref.borderStyleButton,
    borderRadiusButton = _ref.borderRadiusButton,
    width = _ref.width,
    height = _ref.height;
  var modalStyle = {
    fontFamily: fontFamily,
    // Specifies the font family for the element.
    fontSize: "".concat(fontSize, "px"),
    // Sets the font size for the element using the `fontSize` variable (in pixels) and adds "px" to the value.
    color: textColor,
    // Defines the text color for the element.
    backgroundColor: backgroundColor,
    // Sets the background color for the element.
    display: display,
    // Determines the display property for the element, controlling how it is rendered.
    padding: padding,
    // Specifies the padding for the element, creating space around the content inside.
    border: borderStyle,
    // Sets the border style for the element, defining its border characteristics.
    borderRadius: borderRadius,
    // Controls the border radius, determining the roundness of the element's corners.
    width: width,
    // Defines the width of the element.
    height: height,
    // Specifies the height of the element.
    margin: margin // Sets the margin for the element, controlling the space around the outside.
  };

  var titleStyle = {
    fontFamily: fontFamilyTitle,
    // Specifies the font family for the title.
    fontSize: "".concat(fontSizeTitle, "px"),
    // Sets the font size for the title using the `fontSizeTitle` variable (in pixels) and adds "px" to the value.
    color: textColorTitle,
    // Defines the text color for the title.
    backgroundColor: backgroundColorTitle,
    // Sets the background color for the title.
    display: displayTitle,
    // Determines the display property for the title, controlling how it is rendered.
    padding: paddingTitle,
    // Specifies the padding for the title, creating space around the content inside.
    border: borderStyleTitle,
    // Sets the border style for the title, defining its border characteristics.
    borderRadius: borderRadiusTitle,
    // Controls the border radius for the title, determining the roundness of its corners.
    width: widthTitle,
    // Defines the width of the title.
    height: heightTitle,
    // Specifies the height of the title.
    margin: marginTitle // Sets the margin for the title, controlling the space around the outside.
  };

  var buttonStyle = {
    fontFamily: fontFamilyButton,
    // Specifies the font family for the button.
    fontSize: "".concat(fontSizeButton, "px"),
    // Sets the font size for the button using the `fontSizeButton` variable (in pixels) and adds "px" to the value.
    color: textColorButton,
    // Defines the text color for the button.
    backgroundColor: backgroundColorButton,
    // Sets the background color for the button.
    padding: paddingButton,
    // Specifies the padding for the button, creating space around the content inside.
    border: borderStyleButton,
    // Sets the border style for the button, defining its border characteristics.
    borderRadius: borderRadiusButton,
    // Controls the border radius for the button, determining the roundness of its corners.
    width: widthButton,
    // Defines the width of the button.
    height: heightButton,
    // Specifies the height of the button.
    margin: marginButton,
    // Sets the margin for the button, controlling the space around the outside.
    transition: transitionButton // Defines the transition property for the button, controlling how changes are animated.
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal__title",
    style: titleStyle
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__box"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__box__button",
    onClick: handleCancelClick,
    style: buttonStyle
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__box__button",
    onClick: handleConfirmClick,
    style: buttonStyle
  }, "Confirm")));
}