import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { LibreFranklin_700Bold } from "@expo-google-fonts/libre-franklin";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Home } from "./screens/Home";
import { Splash, Legal, Sources } from "./screens/onboarding";

import { DataStore } from "./util/data";

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
    LibreFranklin_700Bold,
  });

  const [onboardingComplete, setOnboardingComplete] = useState(null);
  useEffect(() => {
    (async () => {
      const onboarding = await DataStore.get("onboarding");
      console.log(onboarding === "complete");
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
                <Stack.Screen name="Onboarding:Legal" component={Legal} />
                <Stack.Screen name="Onboarding:Sources" component={Sources} />
              </>
            ) : (
              <Stack.Screen name="Home" component={Home} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </>
  );
}

export default App;
