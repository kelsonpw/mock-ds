import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";

export default {
  title: "Text/H1",
  component: Text.H1,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text.H1 {...args}>I am H1 text!</Text.H1>
);

export const H1 = Template.bind({});
