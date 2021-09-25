import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import logoutScreen from "../screens/logoutScreen";
import EmployeeNavigation from "./stack/employeeNavigation"

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EmployeeNavigation"
        component={EmployeeNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Employee",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={logoutScreen}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="logout" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;