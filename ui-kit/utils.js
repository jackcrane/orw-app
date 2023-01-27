import React from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  padding: 5px;
  height: 100%;
  padding-top: ${(props) => props.topInset + 15 || 25}px;
`;

const StaticContainer = styled.View`
  padding: 5px;
  height: 100%;
  padding-top: ${(props) => props.topInset + 15 || 25}px;
`;

const SplashImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SplashContainer = (props) => {
  const cleanedProps = { ...props };
  delete cleanedProps.children;
  return (
    <>
      <SplashImage {...cleanedProps} />
      <StaticContainer {...props} />
    </>
  );
};

export { Container, StaticContainer, SplashContainer };
