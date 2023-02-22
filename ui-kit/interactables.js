import styled from "styled-components/native";
import React from "react";
import { THEME } from "./theme";

const ButtonBuilder = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: ${THEME.measurements.borderRadius};
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: ${(props) => props.border || "0px"};
  border-color: ${(props) => props.borderColor || "transparent"};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.size || 25}px;
  color: ${(props) => props.color || "black"};
  font-family: "Raleway_700Bold";
  font-weight: 700;
`;

const BigButtonBuilder = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: ${THEME.measurements.borderRadius};
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: ${(props) => props.border || "2px"};
  border-color: ${(props) => props.borderColor || "black"};
`;

const BigButton = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <BigButtonBuilder {...cleanedProps}>
      <ButtonText>{props.children}</ButtonText>
    </BigButtonBuilder>
  );
};

const Button = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <ButtonBuilder {...cleanedProps}>
      <ButtonText>{props.children}</ButtonText>
    </ButtonBuilder>
  );
};

const ButtonOutline = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <ButtonBuilder
      {...cleanedProps}
      border={"1px"}
      borderColor={THEME.colors.black}
      bgColor={THEME.colors.orange}
    >
      <ButtonText>{props.children}</ButtonText>
    </ButtonBuilder>
  );
};

const LargeButtonOutline = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <ButtonBuilder
      {...cleanedProps}
      border={"2px"}
      borderColor={THEME.colors.black}
    >
      <ButtonText size={30}>{props.children}</ButtonText>
    </ButtonBuilder>
  );
};

const InputBuilder = styled.TextInput`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: ${THEME.measurements.borderRadius};
  padding: 10px;
  margin: 5px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: ${(props) => props.border || "0px"};
  border-color: ${(props) => props.borderColor || "transparent"};
`;

const Input = styled(InputBuilder)`
  height: 50px;
  font-size: 20px;
  font-family: "Raleway_700Bold";
  font-weight: 700;
  border-width: 1px;
  border-color: ${THEME.colors.black};
`;

export { Button, ButtonOutline, BigButton, Input, LargeButtonOutline };
