import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { Picker } from "@react-native-picker/picker";


import { employeeUpdate } from "../redux/employee/actions"

import Spacer from "../common/spacer";

const EmployeeCreateScreen = (props) => {

  const { name, phone, shift } = props;

  return (
    <View style={styles.container}>
      <Spacer>
        <TextInput
          label="Name"
          autoCorrect={false}
          value={name}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "name", value })
          }
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Phone number"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "phone", value })
          }
        />
      </Spacer>

      <Spacer>
        <Text style={styles.text}>Shift:</Text>
        <Picker
          selectedValue={shift}
          onValueChange={(value) =>
            props.employeeUpdate({ prop: "shift", value })
          }
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </Spacer>

      <Spacer>
        <Button icon="plus-box-outline" mode="contained">
          Create
        </Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee

  return { name, phone, shift };
}

const mapDispatchToProps = (dispatch) => {
  return {
    employeeUpdate: ({ prop, value }) =>
      dispatch(employeeUpdate({ prop, value })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateScreen);
