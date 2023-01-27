import AsyncStorage from "@react-native-async-storage/async-storage";

const DataStore = {
  get email() {
    return AsyncStorage.getItem("email");
  },
  set email(value) {
    AsyncStorage.setItem("email", value);
  },
  get name() {
    return AsyncStorage.getItem("name");
  },
  set name(value) {
    AsyncStorage.setItem("name", value);
  },
  get onboarding() {
    return AsyncStorage.getItem("onboarding");
  },
  set onboarding(value) {
    AsyncStorage.setItem("onboarding", value);
  },
};

export { DataStore };
