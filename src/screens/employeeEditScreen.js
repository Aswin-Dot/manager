import React, { useEffect } from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { employeeEdit, employeeUpdate } from "../redux/employee/actions";
import EmployeeForm from "../components/employeeForm";
import Spacer from "../common/spacer";

const EmployeeEditScreen = (props) => {
  const { employee } = props.route.params;
  const { name, phone, shift } = props;

  useEffect(() => {
    _.each(employee, (value, prop) => {
        props.employeeUpdate({ prop, value });
    })
  },[])

  return (
    <View style={styles.container}>
      <EmployeeForm {...props} />
      <Spacer>
        <Button
          icon="check-circle"
          mode="contained"
          onPress={() => {
            props.employeeEdit({ name, phone, shift, uid: employee.uid}),
              props.navigation.pop();
          }}
        >
          Save
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
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
};

const mapDispatchToProps = (dispatch) => {
  return {
    employeeEdit: ({ name, phone, shift, uid }) =>
      dispatch(employeeEdit({ name, phone, shift, uid })),
    employeeUpdate: ({ prop, value }) =>
      dispatch(employeeUpdate({ prop, value })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditScreen);
