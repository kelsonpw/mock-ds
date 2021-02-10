import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "./Text";

export default {
  title: "Text/Body",
  component: Text.Body,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text.Body {...args}>I am Body text!</Text.Body>
);

export const Body = Template.bind({});
