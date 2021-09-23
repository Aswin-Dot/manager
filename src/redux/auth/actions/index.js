import {
  email_changed,
  password_changed,
  login_successful,
  login_failure,
  loading_spinner,
  logout_user
} from "../types";
import firebase from "firebase";

export const emailChanged = (text) => {
    return {
      type: email_changed,
      payload: text,
    };
}

export const passwordChanged = (text) => {
    return {
      type: password_changed,
      payload: text,
    };
}

export const loginUser = (email, password) => async(dispatch) => {

  dispatch({ type: loading_spinner });

  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({type: login_successful, payload: res.user})
  } catch (err) {
    try{
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch({type: login_successful, payload: res.user})
    } catch (err) {
      dispatch({ type: login_failure, payload: "Authentication Failed" })
    }
  }

  // firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then(user => {
  //     dispatch({ type: login_successful, payload: user });
  //     console.log(user.additionalUserInfo)
  //   })
  //   .catch(() => {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((user) => {
  //         dispatch({ type: login_successful, payload: user });
  //       })
  //       .catch((err) =>
  //         dispatch({ type: login_failure, payload: err.message })
  //       );
  //   })
}

export const googleSignIn = () => async(dispatch) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithRedirect(provider);

  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;

      dispatch({ type: login_successful, payload: user });
    })
    .catch((error) => {
      alert(error.message)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

export const logoutUser = () => async(dispatch) => {
  try {
    dispatch({ type: logout_user });
    await firebase.auth().signOut()
  } catch (e) {
    alert("Error occured! try again.")
  }
}