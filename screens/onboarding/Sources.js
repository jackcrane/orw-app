import React from "react";
import { LEGAL } from "../../constants/legal";
import { Interactables, Media, Page, Typography } from "../../ui-kit";
import { Absolute, Row, Spacer } from "../../ui-kit/micro";
import { SOURCES } from "../../constants/sources";
import MarqueeView from "react-native-marquee-view";
import { Dimensions } from "react-native";

const Sources = (props) => {
  return (
    <Page.Page
      title="You can trust our sources."
      outside={
        <Absolute bottom={"50px"}>
          <Interactables.ButtonOutline
            outline
            onPress={() => props.navigation.navigate("Onboarding:Contact")}
          >
            Sounds good
          </Interactables.ButtonOutline>
        </Absolute>
      }
    >
      <Typography.Text>{SOURCES}</Typography.Text>
      <Spacer height={"40px"} />
      <Row>
        <Media.Image
          source={require("../../assets/images/uscg.png")}
          width={(Dimensions.get("window").width - 50) / 4}
        />
        <Media.Image
          source={require("../../assets/images/logo.png")}
          width={(Dimensions.get("window").width - 50) / 4}
        />
        <Media.Image
          source={require("../../assets/images/okigis.png")}
          width={(Dimensions.get("window").width - 50) / 4}
        />
        <Media.Image
          source={require("../../assets/images/noaa.png")}
          width={(Dimensions.get("window").width - 50) / 4}
        />
      </Row>
    </Page.Page>
  );
};

export { Sources };
