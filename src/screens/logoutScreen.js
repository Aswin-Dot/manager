import * as React from "react";
import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Spacer from "../common/spacer";
import { logoutUser } from "../redux/auth/actions"

const LogoutScreen = (props) => {
    return (
      <View style={styles.container}>
        <Spacer>
          <Button
            icon="logout-variant"
            mode="contained"
            loading={props.loading}
            onPress={() => props.logoutUser()}
          >
            Logout
          </Button>
        </Spacer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => dispatch(logoutUser())
    };
}

export default connect(null, mapDispatchToProps)(LogoutScreen)