import * as React from "react";
import styled from "@emotion/styled";

import {
  BoxJustification,
  BoxAlignment,
  BoxDirection,
  BoxBorderColor,
  DEFAULT_BACKGROUND_COLOR,
} from "./tokens";

export interface BoxProps {
  children?: React.ReactNode;
  alignment?: BoxAlignment;
  justification?: BoxJustification;
  style?: React.CSSProperties;
}

export function HorizontalBox(props: BoxProps) {
  const { children, alignment, justification, style } = props;
  return (
    <BoxTemplate
      direction={BoxDirection.HORIZONTAL}
      alignment={alignment}
      justification={justification}
      style={style}
    >
      {children}
    </BoxTemplate>
  );
}

export function VerticalBox(props: BoxProps) {
  const { children, alignment, justification, style } = props;
  return (
    <BoxTemplate
      direction={BoxDirection.VERTICAL}
      alignment={alignment}
      justification={justification}
      style={style}
    >
      {children}
    </BoxTemplate>
  );
}

interface BoxTemplateProps {
  children?: React.ReactNode;
  direction: BoxDirection;
  alignment?: BoxAlignment;
  justification?: BoxJustification;
  style?: React.CSSProperties;
}

function BoxTemplate(props: BoxTemplateProps) {
  const {
    children,
    direction,
    alignment = BoxAlignment.START,
    justification = BoxJustification.START,
    style,
  } = props;
  return (
    <StyledBox
      direction={direction}
      alignment={alignment}
      justification={justification}
      style={style}
    >
      {children}
    </StyledBox>
  );
}

const StyledBox = styled.div<BoxTemplateProps>((props) => ({
  border: `1px solid ${BoxBorderColor.PRIMARY}`,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  display: "flex",
  flexDirection: props.direction,
  justifyContent: props.justification,
  alignItems: props.alignment,
}));
