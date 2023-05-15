function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import styled from "styled-components";
import { colors } from "../../theme/colors";
import { input } from "../../theme/input";
const BaseButton = styled.button`
  font-weight: 700;
  transition: 0.5s;
  background: white;
  width: ${props => props.fullwidth ? "100%" : "fit-content"};
  padding: ${props => props.size ? `${input[props.size]}` : "5px 10px"};
  outline: none;
  background-color: ${props => props.color ? colors[props.color].primary : "#fff"};
  border: ${props => props.color ? `2px solid ${colors[props.color].primary}` : "2px solid #fff"};

  color: ${props => props.color ? "#fff" : "black"};
  &:hover {
    cursor: ${props => props.disabled ? "default" : "pointer"};
    transition: 0.5s;
    box-shadow: ${props => props.color ? `0px 0px 10px 1px ${colors[props.color].shadow}` : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  }
  & span {
  }
`;
const OutlinedButton = styled(BaseButton)`
  background-color: rgba(0, 0, 0, 0.2);
  color: ${props => props.color ? colors[props.color].primary : "#fff"};
`;
const RoundedButton = styled(BaseButton)`
  border-radius: 7px;
`;
const RoundedOutlined = styled(OutlinedButton)`
  border-radius: 7px;
  background-color: #fcfcfc;
`;
const TextButton = styled(BaseButton)`
  border: none;
  background: none;
  background-color: none;
  color: ${props => props.disabled ? "#ccc" : colors[props.color].primary};
  &:hover {
    cursor: ${props => props.disabled ? "default" : "pointer"};
    transition: 0.5s;
    box-shadow: ${props => props.color && !props.disabled ? `0px 0px 10px 1px ${colors[props.color].shadow}` : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  }
`;
const RainbowButton = styled.button`
  font-weight: 700;
  width: ${props => props.fullwidth ? "100%" : "fit-content"};
  position: relative;
  padding: ${props => props.size ? `${input[props.size]}` : "5px 10px"};
  color: #fff;
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  border-radius: 7px;
  box-shadow: none;
  outline: none;
  border: none;
  &::before {
    content: "";
    inset: 1px;
    position: absolute;
    border-radius: 6px;
    background: #272727;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 2px;
    left: 2px;
  }
  &:hover::before {
    opacity: 0.7;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    opacity: 0;
    transition: 0.5s;
    filter: blur(5px);
  }
  &:hover:after {
    opacity: 1;
  }
  & span {
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
`;
const Button = ({
  type,
  size,
  label,
  variant,
  ...rest
}) => {
  const {
    sx
  } = rest;
  const buttonDictionary = {
    filled: /*#__PURE__*/React.createElement(BaseButton, _extends({
      type: type ?? "button",
      size: size,
      style: {
        ...sx
      }
    }, rest), label),
    outlined: /*#__PURE__*/React.createElement(OutlinedButton, _extends({
      type: type ?? "button",
      size: size
    }, rest), label),
    rounded: /*#__PURE__*/React.createElement(RoundedButton, _extends({
      type: type ?? "button",
      size: size
    }, rest), label),
    "rounded-outlined": /*#__PURE__*/React.createElement(RoundedOutlined, _extends({
      type: type ?? "button",
      size: size
    }, rest), label),
    text: /*#__PURE__*/React.createElement(TextButton, _extends({
      type: type ?? "button",
      size: size
    }, rest), /*#__PURE__*/React.createElement("span", null, label)),
    rainbow: /*#__PURE__*/React.createElement(RainbowButton, _extends({
      type: type ?? "button",
      size: size
    }, rest), /*#__PURE__*/React.createElement("span", null, label))
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, variant ? buttonDictionary[variant] : buttonDictionary.filled);
};
export default Button;