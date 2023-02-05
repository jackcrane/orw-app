import React from "react";
import { LEGAL } from "../../constants/legal";
import { Interactables, Page, Typography } from "../../ui-kit";
import { Absolute } from "../../ui-kit/micro";

const Legal = (props) => {
  return (
    <Page.Page
      title="The legal stuff."
      outside={
        <Absolute bottom={"50px"}>
          <Interactables.ButtonOutline
            outline
            onPress={() => props.navigation.navigate("Onboarding:Sources")}
          >
            Okay cool
          </Interactables.ButtonOutline>
        </Absolute>
      }
    >
      <Typography.Text size={15}>{LEGAL}</Typography.Text>
    </Page.Page>
  );
};

export { Legal };
