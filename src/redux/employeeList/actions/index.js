import { employees_fetch } from "../types";
import firebase from "firebase";

export const employeesFetch = () => async(dispatch) => {
    const { currentUser } = firebase.auth();

    try {
        await firebase
          .database()
          .ref(`/users/${currentUser.uid}/employees`)
          .on("value", (snapshot) => {
            dispatch({ type: employees_fetch, payload: snapshot.val() });
          });
    } catch (err) {
        alert(err.message);
    }
}