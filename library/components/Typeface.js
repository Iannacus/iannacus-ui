function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import styled from "styled-components";
import { colors } from "./theme/colors";
import { sizes } from "./theme/fonts";
const Text = styled.p`
  color: ${props => props.color ? colors[props.color].primary : "#8c8c8c"};
  text-shadow: ${props => props.glow ? `0px 0px 10px ${colors[props.color].shadow}` : "0px 0px 0px white"};
  font-size: ${props => props.variant ? sizes[props.variant].size : "14px"};
  font-weight: ${props => props.variant ? sizes[props.variant].weight : "14px"};
  margin: 0;
  &:hover {
    cursor: ${props => props.hover ? "pointer" : "defautl"};
  }
`;
const TypeFace = ({
  children,
  variant,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(Text, _extends({
    variant: variant
  }, rest), children);
};
export default TypeFace;