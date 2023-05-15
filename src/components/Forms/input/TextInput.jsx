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
    background: ${(props) => (props.filled ? "transparent" : "#fff")};
    padding: 0 5px;
    margin-left: 5px;
    transform: ${(props) =>
      props.filled ? "translateY(2px)" : "translateY(-2px)"};
    font-size: 13px;
    z-index: 2;
    color: ${(props) => {
      const { filled, color } = props;
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
    height: ${(props) => (props.filled ? "58px" : "44px")};
    background: ${(props) =>
      props.filled ? colors[props.color].primary : "transparent"};
    border-radius: ${(props) => (props.filled ? "10px 10px 0 0" : "7px")};
    border: ${(props) =>
      props.color
        ? `1px solid ${colors[props.color].primary}`
        : `1px solid ${colors.magenta.primary}`};
    border-bottom: ${(props) => {
      if (props.filled) {
        return "2px solid #8f8f8f";
      }
    }};
  }
`;

const TextInput = ({ placeholder, variant, color, type, ...rest }) => {
  const inputDictionary = {
    outlined: <></>,
    filled: (
      <InputBox filled color={color || "magenta"}>
        <Input required="required" type={type || "text"} {...rest} />
        <Label>{placeholder}</Label>
        <i />
      </InputBox>
    ),
    standard: (
      <InputBox color={color}>
        <Input required="required" type={type || "text"} {...rest} />
        <Label>{placeholder}</Label>
        <i />
      </InputBox>
    ),
  };

  return <>{variant ? inputDictionary[variant] : inputDictionary.standard}</>;
};

export default TextInput;
