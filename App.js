import React, { useEffect, useState } from 'react';
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

    firebaseInitialization();
    if (!firebase.apps.length) {
    } else {
      firebase.app(); // if already initialized, use that one
    }
  }, [])

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true);
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

  return (
    <NavigationContainer>
      <Provider store={store}>
        {isLoggedIn ? <AppNavigation/>: <RootNavigation />}
          <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}