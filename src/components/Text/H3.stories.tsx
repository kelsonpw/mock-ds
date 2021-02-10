import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";

export default {
  title: "Text/H3",
  component: Text.H3,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text.H3 {...args}>I am H3 text!</Text.H3>
);

export const H3 = Template.bind({});
