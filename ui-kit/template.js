import React from "react";
import styled from "styled-components";
import { Media, Typography } from ".";
import { Directional, Row, Spacer } from "./micro";
import { Scaffold } from "./scaffold";
import { Container, StaticContainer } from "./utils";

const Page = (props) => {
  return (
    <Scaffold>
      <Directional direction={props.compact ? "row" : "column"}>
        <Media.Image
          source={require("../assets/images/logo.png")}
          height={"100px"}
        />
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
    </Scaffold>
  );
};

export { Page };
