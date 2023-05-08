import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import { THEME } from "./theme";
import { Alert, Linking } from "react-native";
import { Text } from "./typography";
import { Typography } from ".";

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

const EmergencyButtonBuilder = styled.TouchableOpacity`
  background-color: ${THEME.colors.red};
  border-radius: ${THEME.measurements.borderRadius};
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmergencyButton = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <EmergencyButtonBuilder
      {...cleanedProps}
      onPress={() =>
        Alert.alert(
          "Get help",
          "Select who you would like to contact. Pressing these buttons will open a phone call",
          [
            {
              text: "Call 911",
              style: "destructive",
              onPress: () => {
                console.log("Calling 911");
                // Open phone call
                Linking.openURL("tel:911");
              },
            },
            {
              text: "US Coast Guard sector Ohio Valley",
              onPress: () => {
                console.log("Calling US Coast Guard sector Ohio Valley");
                Linking.openURL("tel:8002537465");
              },
            },
            {
              text: "Medahl locks and dam",
              onPress: () => {
                console.log("Calling Medahl locks and dam");
                Linking.openURL("tel:5138762921");
              },
            },
            {
              text: "Markland Locks and Dam",
              onPress: () => {
                console.log("Calling Markland Locks and Dam");
                Linking.openURL("tel:8595677661");
              },
            },
            {
              text: "McAlpine Locks and Dam",
              onPress: () => {
                console.log("Calling McAlpine Locks and Dam");
                Linking.openURL("tel:5025677661");
              },
            },
            {
              text: "Cancel",
            },
          ]
        )
      }
    >
      <ButtonText color={THEME.colors.white} size={15}>
        Emergency
      </ButtonText>
      <ButtonText color={THEME.colors.white} size={20}>
        Get Help
      </ButtonText>
    </EmergencyButtonBuilder>
  );
};

const LinkBuilder = styled.TouchableOpacity``;
const LinkText = styled(Text)`
  font-size: ${(props) => props.size || 20}px;
  color: ${(props) => props.color || THEME.colors.blue};
  font-family: "Raleway_700Bold";
  font-weight: 700;
`;

const Link = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <LinkBuilder {...cleanedProps}>
      <LinkText>{props.children}</LinkText>
    </LinkBuilder>
  );
};

const SelectItem = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.selected ? THEME.colors.orange : THEME.colors.grey};
  border: 1px solid ${THEME.colors.black};
  border-top-width: ${(props) => (props.first ? "1px" : "0px")};
  border-top-left-radius: ${(props) => (props.first ? "15px" : "0px")};
  border-top-right-radius: ${(props) => (props.first ? "15px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.last ? "15px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.last ? "15px" : "0px")};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SelectGroup = (props) => {
  const [selected, setSelected] = useState(props.value || "");

  useEffect(() => {
    if (props.onSelect) props.onSelect(selected);
  }, [selected]);

  return (
    <>
      {props.options.map((option, i) => (
        <SelectItem
          first={i === 0}
          last={i === props.options.length - 1}
          onPress={() => setSelected(option.value)}
          selected={selected === option.value}
          activeOpacity={0.7}
        >
          <Typography.Text bold size={25}>
            {option.title}
          </Typography.Text>
          <Typography.Text size={20}>{option.subtitle}</Typography.Text>
        </SelectItem>
      ))}
    </>
  );
};

export {
  Button,
  ButtonOutline,
  BigButton,
  Input,
  LargeButtonOutline,
  EmergencyButton,
  Link,
  SelectGroup,
};
