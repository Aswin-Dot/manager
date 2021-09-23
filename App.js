import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import firebase from "firebase/app";

import RootNavigation from './src/navigation/rootNavigation';
import AppNavigation from './src/navigation/appNavigation';

import store from "./src/redux/index";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDdZ2hSTvb-FkPrIIu6Qit4dpM25KEZ6tA",
      authDomain: "manager-3ba61.firebaseapp.com",
      projectId: "manager-3ba61",
      storageBucket: "manager-3ba61.appspot.com",
      messagingSenderId: "424316765501",
      appId: "1:424316765501:web:abf8092c3801a28ebab154",
      measurementId: "G-S3HLJD0WZ7",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
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