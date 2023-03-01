import React from "react";
import styled from "styled-components";
import { Media, Micro, Typography, Interactables, Scaffold } from ".";
import { Button } from "./interactables";
import { Directional, Row, Spacer } from "./micro";
import { Container, StaticContainer } from "./utils";

const Page = (props) => {
  return (
    <Scaffold.Scaffold>
      <Directional direction={props.compact ? "row" : "column"}>
        <Directional direction="row">
          <Micro.Center between direction="row">
            <Media.Image
              source={require("../assets/images/logo.png")}
              height={"100px"}
            />
            <Interactables.EmergencyButton />
          </Micro.Center>
        </Directional>
        <Spacer height={"40px"} />
        <Typography.Title>{props.title}</Typography.Title>
      </Directional>
      <Spacer />
      <Container nopadding>
        <Spacer />
        {props.children}
        <Spacer height={"150px"} />
      </Container>
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
