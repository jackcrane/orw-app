import React, { useEffect, useState } from "react";
import { DevSettings } from "react-native";
import { Utils, Typography, Page, Interactables, Micro } from "../ui-kit";
import { DataStore } from "../util/data";

const Home = () => {
  const [name, setName] = useState(null);
  useEffect(() => {
    DataStore.get("name").then((name) => setName(name));
    (async () => {
      const f = await DataStore.getAll();
      console.log({ f });
    })();
  }, []);
  return (
    <Page.Page title={`Howdy${name && `, ${name}!`}`}>
      <Typography.Text>What do you want to check out today?</Typography.Text>
      <Interactables.LargeButtonOutline>
        <Typography.Text>Digital Guide</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline>
        <Typography.Text>Weather & River Conditions</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline>
        <Typography.Text>Safety Information</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline>
        <Typography.Text>Rivertown Events</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.ButtonOutline>
        <Typography.Text
          onPress={async () => {
            console.log("Resetting onboarding");
            await DataStore.set("onboarding", null);
            DevSettings.reload();
            console.log("Reloaded JS");
          }}
        >
          Reset onboarding
        </Typography.Text>
      </Interactables.ButtonOutline>
      <Micro.Spacer height={30} />
      <Micro.Center>
        <Typography.Whisper>
          App built by Jack Crane. Compiled on 2/21/2023. Version 0.0.1a. The
          current state of this app is not for public consumption.
        </Typography.Whisper>
      </Micro.Center>
    </Page.Page>
  );
};

export { Home };
