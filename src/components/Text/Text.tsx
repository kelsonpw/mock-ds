import * as React from "react";
import styled from "@emotion/styled";
import { TextColor, TextFontSize, TextFontWeight } from "./tokens";

interface TextComponentProps {
  children: React.ReactNode;
  color?: TextColor;
  fontWeight?: TextFontWeight;
  fontSize?: TextFontSize;
}

export function Body(props: TextComponentProps) {
  const {
    children,
    color = TextColor.PRIMARY,
    fontWeight = TextFontWeight.BOLD,
    fontSize = TextFontSize.BODY,
  } = props;

  return (
    <TextTemplate color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </TextTemplate>
  );
}

export function Large(props: TextComponentProps) {
  const {
    children,
    color = TextColor.BLACK,
    fontWeight = TextFontWeight.REGULAR,
    fontSize = TextFontSize.LARGE,
  } = props;

  return (
    <TextTemplate
      color={color}
      isLarge={true}
      fontWeight={fontWeight}
      fontSize={fontSize}
    >
      {children}
    </TextTemplate>
  );
}

export function H1(props: TextComponentProps) {
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

export function H2(props: TextComponentProps) {
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

export function H3(props: TextComponentProps) {
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
  isLarge?: boolean;
  children: React.ReactNode;
  color: TextColor;
  fontWeight: TextFontWeight;
  fontSize: TextFontSize;
}

function TextTemplate(props: TextTemplateProps) {
  const { as = "p", children, color } = props;

  return (
    <StyledText as={as} color={color}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.div<Partial<TextTemplateProps>>((props) => ({
  fontFamily: "'Roboto', sans-serif",
  color: props.color,
  fontWeight: props.fontWeight,
  fontSize: props.fontSize,
}));
