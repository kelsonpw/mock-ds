import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";

export default {
  title: "Text/Large",
  component: Text.Large,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text.H1 {...args}>I am large text!</Text.H1>
);

export const Large = Template.bind({});
