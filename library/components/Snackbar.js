import React from "react";
import styled from "styled-components";
import { colors } from "./theme/colors";
import TypeFace from "./Typeface";
const SnackbarBase = styled.div`
  position: absolute;
  top: ${props => props.vertical === "top" && "20px"};
  bottom: ${props => props.vertical === "bottom" && "20px"};
  left: ${props => props.horizontal === "left" && "20px"};
  right: ${props => props.horizontal === "right" && "20px"};
  min-width: 250px;
  max-width: 380px;
  border-radius: 10px;
  border: ${props => props.severity ? `3px solid ${colors[props.severity].primary}` : "3px solid rgba(255,255,255,0.8)"};
  box-shadow: ${props => props.severity ? `0px 0px 10px 3px ${colors[props.severity].shadow}` : "0px 0px 10px 1px rgba(255, 255, 255, 0.6)"};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  & > .close {
    cursor: pointer;
  }
`;
const Snackbar = ({
  open,
  onClose,
  message,
  severity,
  position
}) => {
  const {
    horizontal,
    vertical
  } = position;
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement(SnackbarBase, {
    severity: severity,
    vertical: vertical || "top",
    horizontal: horizontal || "left"
  }, /*#__PURE__*/React.createElement(TypeFace, {
    color: severity
  }, severity && /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, severity === "info" && "info", severity === "warning" && "warning", severity === "error" && "error", severity === "success" && "check")), /*#__PURE__*/React.createElement(TypeFace, {
    variant: "paragraph",
    color: severity
  }, message), /*#__PURE__*/React.createElement(TypeFace, {
    onClick: () => onClose(),
    className: "close",
    color: severity
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close"))));
};
export default Snackbar;