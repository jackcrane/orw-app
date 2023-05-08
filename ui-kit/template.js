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
                source={require("../assets/images/logo-horiz.png")}
                height={"50px"}
              />
              {/* <Interactables.EmergencyButton /> */}
            </Micro.Center>
          ) : (
            <Media.Image
              source={require("../assets/images/logo-horiz.png")}
              height={"50px"}
            />
          )}
        </Directional>
        <Spacer height={"20px"} />
        <Directional direction="column" align={props.compact && "flex-end"}>
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
          Version {require("../app.json").expo.version}. Not for public
          consumption.
        </Typography.Whisper>
      </Micro.Absolute>
    </Scaffold.Scaffold>
  );
};

export { Page };
