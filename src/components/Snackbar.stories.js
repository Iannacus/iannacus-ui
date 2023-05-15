import { useState } from "react";
import Button from "./Forms/button/Button";
import Snackbar from "./Snackbar";
import { FlexCont } from "../layout";

export default {
  title: "Components/snackbar",
  component: Snackbar,
  argTypes: {
    open: {
      description: "boolean value to open the snackbar",
      control: "boolean",
    },
    onClose: {
      description: "function to close snackbar",
    },
    message: {
      description: "The message to show on snackbar",
      control: "text",
    },
    severity: {
      description: "The snackbar color",
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    position: {
      description:
        "Select the vertical and horizontal position to show component",
      control: "object",
    },
  },
};

const Test = ({ args }) => {
  const [openS, setOpenS] = useState(false);
  console.log(args);
  const { message, open, position, severity } = args;
  return (
    <FlexCont justify="center" align="center" ius={{ height: "100vh" }}>
      <Button
        variant="rainbow"
        label={openS ? "Hidde snackbar" : "show Snackbar"}
        onClick={() => {
          setOpenS(!openS);
        }}
        size="large"
      />
      <Snackbar
        message={message}
        open={openS}
        position={position || { horizontal: "", vertical: "" }}
        severity={severity}
      />
    </FlexCont>
  );
};

export const InfoSnackbar = {
  render: (args) => <Test args={args} />,
};
