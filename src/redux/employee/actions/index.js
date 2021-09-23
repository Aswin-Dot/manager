import firebase from "firebase";

import { employee_update, employee_create } from "../types";

export const employeeUpdate = ({prop, value}) => {
    return {
      type: employee_update,
      payload: {prop, value}
    };
}

export const employeeCreate = ({ name, phone, shift }) => async(dispatch) => {
  const {currentUser} = firebase.auth();

  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift });

    dispatch({ type: employee_create });
  } catch (e) {
    alert(e.message)
  }
}