import React from "react";
import styled from "styled-components";
import { Media, Micro, Typography, Interactables, Scaffold } from ".";
import { Directional, Row, Spacer } from "./micro";
import { Container, StaticContainer } from "./utils";

const Page = (props) => {
  return (
    <Scaffold.Scaffold>
      <Directional direction={props.compact ? "row" : "column"}>
        <Directional direction="row">
          {!props.compact ? (
            <Micro.Center between direction="row">
              <Media.Image
                source={require("../assets/images/logo.png")}
                height={"100px"}
              />
              <Interactables.EmergencyButton />
            </Micro.Center>
          ) : (
            <Media.Image
              source={require("../assets/images/logo.png")}
              height={"100px"}
            />
          )}
        </Directional>
        <Spacer height={"40px"} />
        <Directional direction="column" align="flex-end">
          <Typography.Title>{props.title}</Typography.Title>
          {props.backable && (
            <Interactables.Link onPress={() => props.navigation.goBack()}>
              &lt; Back
            </Interactables.Link>
          )}
        </Directional>
      </Directional>
      <Spacer />
      {props.static ? (
        <StaticContainer nopadding>
          <Spacer />
          {props.children}
          <Spacer height={"150px"} />
        </StaticContainer>
      ) : (
        <Container nopadding>
          <Spacer />
          {props.children}
          <Spacer height={"150px"} />
        </Container>
      )}
      {props.outside}
      <Micro.Absolute bottom={"20px"}>
        <Typography.Whisper>
          f66ae1ff-f8d7-45a7-b1d9-1fa9a372d33e
        </Typography.Whisper>
      </Micro.Absolute>
    </Scaffold.Scaffold>
  );
};

export { Page };
