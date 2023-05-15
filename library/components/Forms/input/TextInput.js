function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import styled from "styled-components";
import { colors } from "../../theme/colors";
const Input = styled.input`
  color: #fff;
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  font-size: 18px;
  transition: 0.5s;
  z-index: 1;
`;
const Label = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 10px 10px;
  pointer-events: none;
  color: #8f8f8f;
  font-size: 18px;
  transition: 0.2s;
`;
const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 35px;
  & ${Input}:valid ~ ${Label}, & ${Input}:focus ~ ${Label} {
    display: block;
    background: ${props => props.filled ? "transparent" : "#fff"};
    padding: 0 5px;
    margin-left: 5px;
    transform: ${props => props.filled ? "translateY(2px)" : "translateY(-2px)"};
    font-size: 13px;
    z-index: 2;
    color: ${props => {
  const {
    filled,
    color
  } = props;
  if (filled) {
    return "#fff";
  }
  return color ? colors[color].primary : colors.magenta.primary;
}};
  }
  & i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #8f8f8f;
    border-radius: 7px;
    overflow: hidden;
    transition: 0.2s;
    pointer-events: none;
  }
  & ${Input}:valid ~ i,
  & ${Input}:focus ~ i {
    height: ${props => props.filled ? "58px" : "44px"};
    background: ${props => props.filled ? colors[props.color].primary : "transparent"};
    border-radius: ${props => props.filled ? "10px 10px 0 0" : "7px"};
    border: ${props => props.color ? `1px solid ${colors[props.color].primary}` : `1px solid ${colors.magenta.primary}`};
    border-bottom: ${props => {
  if (props.filled) {
    return "2px solid #8f8f8f";
  }
}};
  }
`;
const TextInput = ({
  placeholder,
  variant,
  color,
  type,
  ...rest
}) => {
  const inputDictionary = {
    outlined: /*#__PURE__*/React.createElement(React.Fragment, null),
    filled: /*#__PURE__*/React.createElement(InputBox, {
      filled: true,
      color: color || "magenta"
    }, /*#__PURE__*/React.createElement(Input, _extends({
      required: "required",
      type: type || "text"
    }, rest)), /*#__PURE__*/React.createElement(Label, null, placeholder), /*#__PURE__*/React.createElement("i", null)),
    standard: /*#__PURE__*/React.createElement(InputBox, {
      color: color
    }, /*#__PURE__*/React.createElement(Input, _extends({
      required: "required",
      type: type || "text"
    }, rest)), /*#__PURE__*/React.createElement(Label, null, placeholder), /*#__PURE__*/React.createElement("i", null))
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, variant ? inputDictionary[variant] : inputDictionary.standard);
};
export default TextInput;