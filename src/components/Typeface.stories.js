import TypeFace from "./Typeface";

export default {
  title: "Components/Typeface",
  component: TypeFace,
  argTypes: {
    color: {
      name: "color",
      control: "select",
      options: ["magenta", "cyan", "error", "success", "info", "warning"],
    },
  },
};

export const heading1 = {
  render: (args) => (
    <TypeFace variant="h1" {...args}>
      Titular 1
    </TypeFace>
  ),
};

export const heading2 = {
  render: (args) => (
    <TypeFace variant="h2" {...args}>
      Titular 2
    </TypeFace>
  ),
};

export const heading3 = {
  render: (args) => (
    <TypeFace variant="h3" {...args}>
      Titular 3
    </TypeFace>
  ),
};

export const paragraph = {
  render: (args) => (
    <TypeFace variant="paragraph" {...args}>
      lorem ipsum dolor asimet
    </TypeFace>
  ),
};

export const title = {
  render: (args) => (
    <TypeFace variant="title" {...args}>
      Soy un titulo
    </TypeFace>
  ),
};

export const subtitle = {
  render: (args) => (
    <TypeFace variant="subtitle" {...args}>
      Soy un subtitulo
    </TypeFace>
  ),
};

export const caption = {
  render: (args) => (
    <TypeFace variant="caption" {...args}>
      Soy un caption
    </TypeFace>
  ),
};

export const Label = {
  render: (args) => (
    <TypeFace variant="label" {...args}>
      Lo que querramos
    </TypeFace>
  ),
};
