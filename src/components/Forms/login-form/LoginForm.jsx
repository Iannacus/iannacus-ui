import React from "react";
import TypeFace from "../../Typeface";
import FlexCont from "../../../layout/container/FlexCont";
import Button from "../button/Button";
import TextInput from "../../Forms/input/TextInput";
import Card from "../../Card";

const LoginForm = () => {
  return (
    <div
      style={{
        width: "380px",
      }}
    >
      <Card>
        <div
          style={{
            padding: "50px 30px",
          }}
        >
          <FlexCont gap="10px">
            <TypeFace variant="title">Login</TypeFace>
            <TextInput variant="standard" placeholder="username" />
            <TextInput variant="standard" placeholder="email" />
            <TextInput
              variant="standard"
              placeholder="password"
              type="password"
            />
            <Button variant="rainbow" size="large" label="Login" />
          </FlexCont>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
