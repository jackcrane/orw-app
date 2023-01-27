import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import React from "react";
import { Container, SplashContainer, StaticContainer } from "./utils";

const Scaffold = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <StaticContainer topInset={insets.top}>{props.children}</StaticContainer>
  );
};

const ImageScaffold = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <SplashContainer
      source={require("../assets/images/splash.png")}
      topInset={insets.top}
    >
      {props.children}
    </SplashContainer>
  );
};

export { Scaffold, ImageScaffold };
