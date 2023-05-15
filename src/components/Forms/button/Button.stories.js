import Button from "./Button";

export default {
  title: "Forms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "magenta",
      description: "Será el color del botón",
      control: "select",
      options: [
        "cyan",
        "magenta",
        "yellow",
        "warning",
        "success",
        "error",
        "info",
      ],
    },
    size: {
      description: "Será el tamaño del botón",
      control: "select",
      options: ["small", "medium", "large"],
    },
    fullwidth: {
      description: "Muestra el botón en el 100% de su contenedor",
      control: "boolean",
    },
    disabled: {
      description: "Desabilita el click del botón",
      control: "boolean",
    },
    label: {
      description: "Indica el texto que tendrá el botón",
      control: "text",
    },
  },
  args: { label: "Botón", color: "magenta", size: "medium", fullwidth: false },
};

export const Filled = {
  render: (args) => <Button variant="filled" {...args} />,
};

export const Rounded = {
  render: (args) => <Button variant="rounded" {...args} />,
};

export const Outlined = {
  render: (args) => <Button variant="outlined" {...args} />,
};

export const RoundedOutlined = {
  render: (args) => <Button variant="rounded-outlined" {...args} />,
};

export const Text = {
  render: (args) => <Button variant="text" {...args} />,
};

export const Rainbow = {
  render: (args) => <Button label="botón" variant="rainbow" {...args} />,
};
