import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { VerticalBox, BoxProps } from "./Box";
import { BoxAlignment, BoxJustification } from "./tokens";

export default {
  title: "Box/VerticalBox",
  component: VerticalBox,
} as Meta;

const Template: Story<BoxProps> = (args) => <VerticalBox {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  children: "I am in a box!",
  alignment: BoxAlignment.CENTER,
  justification: BoxJustification.CENTER,
  style: {
    width: 400,
    height: 400,
  },
};
