import styled from "styled-components/native";
import React from "react";
import { THEME } from "./theme";

const ButtonBuilder = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: ${THEME.measurements.borderRadius};
  padding: 10px;
  margin: 5px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: ${(props) => props.border || "0px"};
  border-color: ${(props) => props.borderColor || "transparent"};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.size || 20}px;
  color: ${(props) => props.color || "black"};
  font-family: "Raleway_700Bold";
  font-weight: 700;
`;

const Button = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <ButtonBuilder {...cleanedProps}>
      <ButtonText size={25}>{props.children}</ButtonText>
    </ButtonBuilder>
  );
};

const ButtonOutline = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <ButtonBuilder
      {...cleanedProps}
      border={1}
      borderColor={THEME.colors.black}
      bgColor={THEME.colors.orange}
    >
      <ButtonText>{props.children}</ButtonText>
    </ButtonBuilder>
  );
};

export { Button, ButtonOutline };
