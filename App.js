import React, { useEffect, useState } from 'react';
import { LogBox } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import firebase from "firebase/app";

import RootNavigation from './src/navigation/rootNavigation';
import AppNavigation from './src/navigation/appNavigation';

import firebaseInitialization from "./src/firebase"
import store from "./src/redux/index";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
    console.log("hi")
    if (!firebase.apps.length) {
      firebaseInitialization();
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }, [])

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true);
          registerForPushNotificationsAsync(user);
        } else {
          setIsLoggedIn(false);
        }
      });
    };
    // checkIsLoggedIn();

    setTimeout(() => {
      checkIsLoggedIn();
    }, 3000);
  }, [isLoggedIn]);

  const registerForPushNotificationsAsync = async (user) => {
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;

      // saving token to the database
        try{
          await firebase
            .database()
            .ref('users')
            .child(`${user.uid}`)
            .update({ ExponentPushToken: token });
        } catch (e) {
          alert(e.message)
        }

    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        {isLoggedIn ? <AppNavigation/>: <RootNavigation />}
          <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}