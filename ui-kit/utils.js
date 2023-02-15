import React from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled(KeyboardAwareScrollView)`
  padding: ${(props) => (!props.nopadding ? 15 : 0)}px;
  height: 100%;
  padding-top: ${(props) =>
    !props.nopadding ? props.topInset + 15 || 25 : 0}px;
  padding-bottom: ${(props) =>
    !props.nopadding ? props.bottomInset + 15 || 25 : 0}px;
  scroll-indicator-insets: ${{
    right: 1,
  }};
`;

const StaticContainer = styled.View`
  padding: ${(props) => (!props.nopadding ? 15 : 0)}px;
  height: 100%;
  padding-top: ${(props) =>
    !props.nopadding ? props.topInset + 15 || 25 : 0}px;
  padding-bottom: ${(props) =>
    !props.nopadding ? props.bottomInset + 15 || 25 : 0}px;
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
