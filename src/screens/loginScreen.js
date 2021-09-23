import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { TextInput, Title, Button } from "react-native-paper";

import {
  emailChanged,
  passwordChanged,
  loginUser,
  googleSignIn,
} from "../redux/auth/actions";

import Spacer from "../common/spacer";

const LoginScreen = (props) => {
  const [eye, setEye] = React.useState(true);

  const {email, password} = props;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login Form</Title>
      <View>
        <Spacer>
          <TextInput
            label="Email"
            onChangeText={(text) => props.emailChanged(text)}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
          />
        </Spacer>
        <Spacer>
          <TextInput
            label="Password"
            secureTextEntry={eye}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => props.passwordChanged(text)}
            value={password}
            right={
              eye ? (
                <TextInput.Icon name="eye-off" onPress={() => setEye(!eye)} />
              ) : (
                <TextInput.Icon name="eye" onPress={() => setEye(!eye)} />
              )
            }
          />
        </Spacer>

        {props.error ? (
          <Spacer>
            <Text style={styles.errorMessage}>{props.error}</Text>
          </Spacer>
        ) : null}

        <Spacer>
          <Button
            icon="login-variant"
            mode="contained"
            loading={props.loading}
            onPress={() => props.loginUser(email, password)}
          >
            Login
          </Button>
        </Spacer>
        {/* <Spacer>
          <Button
            icon="google"
            mode="contained"
            style={styles.googleButton}
            onPress={() => props.googleSignIn()}
          >
            Google Sign-in
          </Button>
        </Spacer> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
  errorMessage: {
    color: "red",
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth

  return { email, password, error, loading };
}

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: (text) => dispatch(emailChanged(text)),
    passwordChanged: (text) => dispatch(passwordChanged(text)),
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    googleSignIn: () => dispatch(googleSignIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  LoginScreen
);
