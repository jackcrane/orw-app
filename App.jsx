import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast, {
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { LibreFranklin_700Bold } from "@expo-google-fonts/libre-franklin";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { DeviceEventEmitter } from "react-native";

import { Home } from "./screens/Home";
import { Splash, Legal, Sources, Contact } from "./screens/onboarding";
import { DigitalGuide } from "./screens/DigitalGuide";
import { Safety } from "./screens/Safety";

import { DataStore } from "./util/data";
import { RequiredEquipment } from "./screens/RequiredEqupment";
import { Events } from "./screens/Events";

const Stack = createNativeStackNavigator();

const TOAST_STYLES = {
  borderRadius: 0,
  width: "100%",
  borderLeftWidth: 0,
  paddingTop: 50,
  marginTop: -50,
  height: 100,
};

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(null);

  DeviceEventEmitter.addListener("Onboarding:Complete", () => {
    setOnboardingComplete(true);
    DataStore.set("onboarding", "complete");
    Toast.show({
      type: "success",
      text1: "Welcome!",
      text2: "You're all set up.",
    });
  });

  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
    LibreFranklin_700Bold,
  });

  useEffect(() => {
    (async () => {
      const onboarding = await DataStore.get("onboarding");
      console.log("Onboarding complete?", onboarding === "complete");
      setOnboardingComplete(onboarding === "complete");
    })();
  }, []);

  if (!fontsLoaded || onboardingComplete === null) {
    return <AppLoading />;
  }

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!onboardingComplete ? (
              <>
                <Stack.Screen name="Onboarding:Splash" component={Splash} />
                <Stack.Screen
                  name="Onboarding:Legal"
                  component={Legal}
                  options={{ headerShown: true, title: "The Legal Stuff" }}
                />
                <Stack.Screen name="Onboarding:Contact" component={Contact} />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                  name="Main:DigitalGuide"
                  component={DigitalGuide}
                  options={{
                    headerShown: true,
                    title: "Digital Guide",
                  }}
                />
                <Stack.Screen name="Main:Safety" component={Safety} />
                <Stack.Screen
                  name="Main:RequiredEquipment"
                  component={RequiredEquipment}
                />
                <Stack.Screen name="Main:Events" component={Events} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <Toast
          config={{
            error: (props) => (
              <ErrorToast
                {...props}
                style={{
                  backgroundColor: "red",
                  ...TOAST_STYLES,
                }}
                text1Style={{
                  color: "white",
                  fontSize: 20,
                }}
                text2Style={{
                  color: "white",
                  fontSize: 16,
                }}
              />
            ),
            success: (props) => (
              <SuccessToast
                {...props}
                style={{
                  backgroundColor: "green",
                  ...TOAST_STYLES,
                }}
                text1Style={{
                  color: "white",
                  fontSize: 20,
                }}
                text2Style={{
                  color: "white",
                  fontSize: 16,
                }}
              />
            ),
            info: (props) => (
              <InfoToast
                {...props}
                style={{
                  backgroundColor: "#1D71F2",
                  ...TOAST_STYLES,
                }}
                text1Style={{
                  color: "white",
                  fontSize: 20,
                }}
                text2Style={{
                  color: "white",
                  fontSize: 16,
                }}
              />
            ),
          }}
        />
      </SafeAreaProvider>
    </>
  );
}

export default App;
