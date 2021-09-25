import React, { useEffect } from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import { Overlay, Text, Card, Icon } from "react-native-elements";
import { Button } from "react-native-paper"
import { connect } from "react-redux";
import Communications from "react-native-communications";

import {
  employeeEdit,
  employeeUpdate,
  employeeDelete,
} from "../redux/employee/actions";
import EmployeeForm from "../components/employeeForm";
import Spacer from "../common/spacer";

const EmployeeEditScreen = (props) => {
  const { employee } = props.route.params;
  const { name, phone, shift } = props;

  const [visible, setVisible] = React.useState(false);

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
            props.employeeEdit({ name, phone, shift, uid: employee.uid });
            props.navigation.pop();
          }}
        >
          Save
        </Button>
      </Spacer>
      <Spacer>
        <Button
          icon="message"
          mode="contained"
          onPress={() =>
            Communications.text(phone, `Your upcoming shift is on ${shift}`)
          }
        >
          Text Schedule
        </Button>
      </Spacer>
      <Overlay style={{width: "100%", margin: 5}} isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Fire Employee</Text>
          <Text style={styles.text}>
            {`Are you sure you want to Fire ${name} ?`}
          </Text>
          <View style={styles.buttons}>
            <Button
              icon="close"
              mode="contained"
              style={styles.button}
              onPress={() => setVisible(false)}
            >
              Cancel
            </Button>
            <Button
              icon="check"
              mode="contained"
              style={styles.button}
              onPress={() => {
                props.employeeDelete({ uid: employee.uid });
                setVisible(false);
                props.navigation.pop();
              }}
            >
              Confirm
            </Button>
          </View>
        </View>
      </Overlay>
      <Spacer>
        <Button icon="cancel" mode="contained" onPress={() => setVisible(true)}>
          Fire
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
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginVertical: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 25,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 10,
  },
  overlay: {
    padding: 15,
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
    employeeDelete: ({ uid }) => dispatch(employeeDelete({ uid })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditScreen);
