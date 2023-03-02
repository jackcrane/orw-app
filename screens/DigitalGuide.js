import React from "react";
import { View } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import WebView from "react-native-webview";
import { Page, Typography, Interactables } from "../ui-kit";

const DigitalGuide = (props) => {
  return (
    <Page.Page
      navigation={props.navigation}
      backable
      title="Digital Guide"
      compact
      static
    >
      <View style={{ height: "80%" }}>
        <WebView
          onLoad={() => {
            console.log("loaded");
          }}
          onError={(e) => {
            console.log("error", e);
            Toast.show({
              type: "error",
              text1: "Error",
              text2: "The webview failed to load",
            });
          }}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "red",
            borderColor: "blue",
            borderWidth: 1,
          }}
          source={{ uri: "https://gis.oki.org/ohioriverway/" }}
        />
      </View>
    </Page.Page>
  );
};

const ModalScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Typography.Text style={{ fontSize: 30 }}>
        This is a modal!
      </Typography.Text>
      <Interactables.Button
        onPress={() => props.navigation.goBack()}
        style={{ marginTop: 20 }}
      >
        <Typography.Text>Dismiss</Typography.Text>
      </Interactables.Button>
    </View>
  );
};

export { DigitalGuide };
