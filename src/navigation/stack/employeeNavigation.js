import React from "react"
import { connect } from "react-redux";
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign } from "@expo/vector-icons";

import EmployeeCreateScreen from "../../screens/employeeCreateScreen";
import EmployeeListScreen from "../../screens/employeeListScreen";
import EmployeeEditScreen from "../../screens/employeeEditScreen";

import { employeeClearForm } from "../../redux/employee/actions";

const Stack = createStackNavigator();

const EmployeeNavigation = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{
          title: "Employees List",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                props.employeeClearForm();
                props.navigation.navigate("EmployeeCreate");
              }}
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
      <Stack.Screen
        name="EmployeeEdit"
        component={EmployeeEditScreen}
        options={{
          title: "Employee Edit",
        }}
      />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    employeeClearForm: () => dispatch(employeeClearForm())
  };
}

export default connect(null, mapDispatchToProps)(EmployeeNavigation);