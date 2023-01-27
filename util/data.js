import AsyncStorage from "@react-native-async-storage/async-storage";

const DataStore = {
  set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    try {
      return AsyncStorage.getItem(key).then((value) => {
        return JSON.parse(value);
      });
    } catch (error) {
      return null;
    }
  },
};

export { DataStore };
