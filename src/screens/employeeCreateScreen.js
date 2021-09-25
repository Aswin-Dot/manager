import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { employeeCreate } from "../redux/employee/actions";
import EmployeeForm from "../components/employeeForm"; 
import Spacer from "../common/spacer";

const EmployeeCreateScreen = (props) => {
  const { name, phone, shift } = props;

  return (
    <View style={styles.container}>
      <EmployeeForm {...props}/>
      <Spacer>
        <Button
          icon="plus-box-outline"
          mode="contained"
          onPress={() => {
            props.employeeCreate({ name, phone, shift: shift || "Monday" }),
            props.navigation.pop();
          }}
        >
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
    employeeCreate: ({ name, phone, shift }) =>
      dispatch(employeeCreate({ name, phone, shift }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeCreateScreen);
