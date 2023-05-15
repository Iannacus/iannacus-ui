import React from "react";
import TypeFace from "../../Typeface";
import FlexCont from "../../../layout/container/FlexCont";
import Button from "../button/Button";
import TextInput from "../../Forms/input/TextInput";
import Card from "../../Card";
const LoginForm = () => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "380px"
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "50px 30px"
    }
  }, /*#__PURE__*/React.createElement(FlexCont, {
    gap: "10px"
  }, /*#__PURE__*/React.createElement(TypeFace, {
    variant: "title"
  }, "Login"), /*#__PURE__*/React.createElement(TextInput, {
    variant: "standard",
    placeholder: "username"
  }), /*#__PURE__*/React.createElement(TextInput, {
    variant: "standard",
    placeholder: "email"
  }), /*#__PURE__*/React.createElement(TextInput, {
    variant: "standard",
    placeholder: "password",
    type: "password"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "rainbow",
    size: "large",
    label: "Login"
  })))));
};
export default LoginForm;