import React from "react";
import { LEGAL } from "../../constants/legal";
import { Interactables, Page, Typography } from "../../ui-kit";
import { Absolute } from "../../ui-kit/micro";

const Legal = (props) => {
  return (
    <Page.Page title="The legal stuff.">
      <Typography.Text size={15}>{LEGAL}</Typography.Text>
    </Page.Page>
  );
};

export { Legal };
