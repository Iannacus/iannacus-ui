import TextInput from "./TextInput";

export default {
  title: "Input",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      name: "placeholder",
      control: "text",
      description: "Placeholder para el input",
    },
    color: {
      control: "select",
      options: [
        "cyan",
        "magenta",
        "yellow",
        "error",
        "success",
        "info",
        "warning",
      ],
    },
  },
};

export const Standard = {
  render: (args) => <TextInput {...args} />,
};

export const Filled = {
  render: (args) => <TextInput variant="filled" {...args} />,
};
