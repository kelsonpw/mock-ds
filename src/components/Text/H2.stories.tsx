import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";

export default {
  title: "Text/H2",
  component: Text.H2,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text.H2 {...args}>I am H2 text!</Text.H2>
);

export const H2 = Template.bind({});
