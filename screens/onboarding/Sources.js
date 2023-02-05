import React from "react";
import { LEGAL } from "../../constants/legal";
import { Interactables, Media, Page, Typography } from "../../ui-kit";
import { Absolute, Row, Spacer } from "../../ui-kit/micro";
import { SOURCES } from "../../constants/sources";
import MarqueeView from "react-native-marquee-view";

const Sources = (props) => {
  return (
    <Page.Page
      title="You can trust our sources."
      outside={
        <Absolute bottom={"50px"}>
          <Interactables.ButtonOutline
            outline
            onPress={() => props.navigation.navigate("Onboarding:Sources")}
          >
            Sounds good
          </Interactables.ButtonOutline>
        </Absolute>
      }
    >
      <Typography.Text size={15}>{SOURCES}</Typography.Text>
      <Spacer height={"40px"} />
    </Page.Page>
  );
};

export { Sources };
