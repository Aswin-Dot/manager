import React from "react"
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import logoutScreen from "../screens/logoutScreen";
import EmployeeCreateScreen from "../screens/employeeCreateScreen";
import EmployeeListScreen from "../screens/employeeListScreen";

const Stack = createStackNavigator();

const EmployeeNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{
          title: "Employee",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("EmployeeCreate")}
            >
              <AntDesign
                name="adduser"
                size={24}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EmployeeCreate"
        component={EmployeeCreateScreen}
        options={{
          title: "Employee Create",
        }}
      />
    </Stack.Navigator>
  );
};

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