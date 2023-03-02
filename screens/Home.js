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
        onPress={() =>
          Toast.show({
            type: "info",
            text1: "Coming Soon",
            text2: "This feature is not ready yet.",
          })
        }
      >
        <Typography.Text>Weather & River Conditions</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline
        onPress={() =>
          Toast.show({
            type: "info",
            text1: "Coming Soon",
            text2: "This feature is not ready yet.",
          })
        }
      >
        <Typography.Text>Safety Information</Typography.Text>
      </Interactables.LargeButtonOutline>
      <Interactables.LargeButtonOutline
        onPress={() =>
          Toast.show({
            type: "info",
            text1: "Coming Soon",
            text2: "This feature is not ready yet.",
          })
        }
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
        <Typography.Text>Reset onboarding</Typography.Text>
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
