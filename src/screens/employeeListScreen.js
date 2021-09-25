import React, { useEffect } from "react";
import _ from "lodash";
import { Card, Avatar, Divider } from "react-native-paper";
import { connect } from "react-redux";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";

import { employeesFetch } from "../redux/employeeList/actions";

const EmployeeListScreen = (props) => {
  // console.log(props)
  const { employees } = props;

  useEffect(() => {
    props.employeesFetch();
  }, []);

  if (!employees) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={employees}
        keyExtractor={({uid}) => uid}
        renderItem={({ item }) => {
          return (
            <TouchableNativeFeedback
              onPress={() =>
                props.navigation.navigate("EmployeeEdit", {
                  employee: item,
                })
              }
            >
              <View>
                <Card.Title
                  title={item.name}
                  subtitle={`Shift: ${item.shift}`}
                  // left={(props) => <Avatar.Text {...props} label={item.name.slice(0,2)} />}
                  left={(props) => (
                    <Avatar.Icon {...props} icon="account-multiple" />
                  )}
                />
                <Divider />
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList.eList, (value, uid) => {
    return { ...value, uid }
  })
  return { employees };
};

const mapDispatchToProps = (dispatch) => {
  return {
    employeesFetch: () => dispatch(employeesFetch()),
    employeeClearForm: () => dispatch(employeeClearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListScreen);
