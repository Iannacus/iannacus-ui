import TextInput from "../../components/Forms/input/TextInput";
import FlexCont from "./FlexCont";

export default {
  title: "Layouts/FlexCont",
  component: FlexCont,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      name: "direction",
      description: "Se toma un valor de las direcciones flex",
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    align: {
      name: "align-items",
      description:
        "Propiedad valida para seleccionar la dirección de alineación dependiendo del eje cruzado de flex",
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
    justify: {
      name: "justify-content",
      description:
        "Propiedad valida para seleccionar la dirección de justificación dependiendo del eje principal de flex",
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    gap: {
      name: "gap",
      description:
        "Propiedad para indicar la separación de los elementos hijos en el eje principal de flex",
      control: "text",
    },
  },
};

export const ContFlex = {
  render: (args) => (
    <FlexCont {...args}>
      <TextInput variant="filled" placeholder="Input 1" fullwidth />
      <TextInput variant="standard" placeholder="Input 2" fullwidth />
      <TextInput variant="filled" placeholder="Input 3" fullwidth />
    </FlexCont>
  ),
};
