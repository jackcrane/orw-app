import React, { useState } from "react";
import { LEGAL } from "../../constants/legal";
import { Interactables, Media, Page, Typography } from "../../ui-kit";
import { Absolute, Row, Spacer } from "../../ui-kit/micro";
import { SOURCES } from "../../constants/sources";
import MarqueeView from "react-native-marquee-view";
import { DeviceEventEmitter, Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { DataStore } from "../../util/data";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [working, setWorking] = useState(false);

  const submit = async () => {
    setWorking(true);
    // Verify email looks like an email
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_regex.test(email)) {
      Toast.show({
        type: "error",
        text1: "Invalid email",
        text2: "Please enter a valid email address.",
      });
      setWorking(false);
      return;
    }
    if (name.length < 2) {
      Toast.show({
        type: "error",
        text1: "Invalid name",
        text2: "Please enter a valid name.",
      });
      setWorking(false);
      return;
    }
    Toast.show({
      type: "info",
      text1: "Working",
      text2: "We are adding you to the mailing list.",
    });
    await fetch(`https://orw.jackcrane.rocks/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "You have been added to the mailing list.",
    });
    DataStore.set("name", name);
    DeviceEventEmitter.emit("Onboarding:Complete");
    setWorking(false);
  };

  return (
    <Page.Page
      title="Just a little information."
      outside={
        <Absolute bottom={"50px"}>
          <Interactables.ButtonOutline
            outline
            onPress={() => !working && submit()}
          >
            {working ? "Loading..." : "Sign me up!"}
          </Interactables.ButtonOutline>
        </Absolute>
      }
    >
      <Typography.Text>
        Join the Ohio River Way's mailing list and get up-to-date information
      </Typography.Text>
      <Spacer height={"40px"} />
      <Typography.Text>Name</Typography.Text>
      <Interactables.Input
        onChangeText={setName}
        autoComplete="name"
        placeholder="John Smith"
        value={name}
      />
      <Spacer height={"20px"} />
      <Typography.Text>Email</Typography.Text>
      <Interactables.Input
        onChangeText={setEmail}
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
      />
      <Spacer height={"20px"} />
      <Typography.Text>
        By signing up, you agree to our{"\n"}
        <Interactables.Link
          onPress={() => {
            props.navigation.navigate("Onboarding:Legal");
          }}
        >
          legal stuff
        </Interactables.Link>{" "}
      </Typography.Text>
    </Page.Page>
  );
};

export { Contact };
