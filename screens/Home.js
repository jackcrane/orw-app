import React, { useEffect, useState } from "react";
import { Alert, DevSettings } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Utils, Typography, Page, Interactables, Micro } from "../ui-kit";
import { DataStore } from "../util/data";

const Home = (props) => {
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
      <Interactables.LargeButtonOutline
        onPress={() => props.navigation.navigate("Main:DigitalGuide")}
      >
        <Typography.Text>Digital Guide</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline
        onPress={() => props.navigation.navigate("Main:Weather")}
      >
        <Typography.Text>Weather & River Conditions</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline
        onPress={() => props.navigation.navigate("Main:Safety")}
      >
        <Typography.Text>Safety Information</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline
        onPress={() => props.navigation.navigate("Main:Events")}
      >
        <Typography.Text>Rivertown Events</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.ButtonOutline
        onPress={async () => {
          console.log("Resetting onboarding");
          await DataStore.set("onboarding", null);
          DevSettings.reload();
          console.log("Reloaded JS");
        }}
      >
        <Typography.Text>Reset onboarding*</Typography.Text>
      </Interactables.ButtonOutline>
      <Micro.Spacer height={30} />
      <Micro.Center>
        <Typography.Whisper>
          App built by Jack Crane. Version {require("../app.json").expo.version}
          . The current state of this app is not for public consumption.
          {`\n\n`}
          *The reset onboarding button is for development purposes only. It will
          be removed in public-facing builds
        </Typography.Whisper>
      </Micro.Center>
    </Page.Page>
  );
};

export { Home };
