import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => props.gap || 0};
`;

const FlexCont = ({ children, direction, align, justify, gap, ius }) => {
  return (
    <Container
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      style={{ ...ius }}
    >
      {children}
    </Container>
  );
};

export default FlexCont;
