import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/loginScreen";
import SplashScreen from "../screens/splashScreen";

const RootStack = createStackNavigator();

const RootNavigation = ({ navigation }) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
