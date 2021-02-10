import * as React from "react";
import styled from "@emotion/styled";
import { TextColor, TextFontSize, TextFontWeight } from "./tokens";

export interface TextProps {
  children: React.ReactNode;
  color?: TextColor;
  fontWeight?: TextFontWeight;
  fontSize?: TextFontSize;
}

export function Body(props: TextProps) {
  const {
    children,
    color = TextColor.PRIMARY,
    fontWeight = TextFontWeight.MEDIUM,
    fontSize = TextFontSize.BODY,
  } = props;

  return (
    <TextTemplate color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </TextTemplate>
  );
}

export function Large(props: TextProps) {
  const {
    children,
    color = TextColor.BLACK,
    fontWeight = TextFontWeight.REGULAR,
    fontSize = TextFontSize.LARGE,
  } = props;

  return (
    <TextTemplate color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </TextTemplate>
  );
}

export function H1(props: TextProps) {
  const {
    children,
    color = TextColor.BLACK,
    fontWeight = TextFontWeight.MEDIUM,
    fontSize = TextFontSize.H1,
  } = props;

  return (
    <TextTemplate
      as="h1"
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </TextTemplate>
  );
}

export function H2(props: TextProps) {
  const {
    children,
    color = TextColor.BLACK,
    fontWeight = TextFontWeight.REGULAR,
    fontSize = TextFontSize.H2,
  } = props;

  return (
    <TextTemplate
      as="h2"
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </TextTemplate>
  );
}

export function H3(props: TextProps) {
  const {
    children,
    color = TextColor["BLACK"],
    fontWeight = TextFontWeight.BOLD,
    fontSize = TextFontSize.H3,
  } = props;

  return (
    <TextTemplate
      as="h3"
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </TextTemplate>
  );
}

interface TextTemplateProps {
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  children: React.ReactNode;
  color: TextColor;
  fontWeight: TextFontWeight;
  fontSize: TextFontSize;
}

function TextTemplate(props: TextTemplateProps) {
  const { as = "p", children, color, fontWeight, fontSize } = props;

  return (
    <StyledText
      as={as}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.p<Partial<TextTemplateProps>>((props) => ({
  fontFamily: "'Roboto', sans-serif",
  color: props.color,
  fontWeight: props.fontWeight,
  fontSize: props.fontSize,
}));

export const Text = {
  Body,
  Large,
  H1,
  H2,
  H3,
};
