import firebase from "firebase";

import { employee_update, employee_reset } from "../types";

export const employeeUpdate = ({prop, value}) => {
    return {
      type: employee_update,
      payload: {prop, value}
    };
}

export const employeeClearForm = () => {
  return {
    type: employee_reset,
  };
}

export const employeeCreate = ({ name, phone, shift }) => async(dispatch) => {
  const {currentUser} = firebase.auth();

  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift });

    dispatch({ type: employee_reset });
  } catch (e) {
    alert(e.message)
  }
}

export const employeeEdit = ({ name, phone, shift, uid }) => async(dispatch) => {
  const { currentUser } = firebase.auth();

  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift });

    dispatch({ type: employee_reset });
  } catch (e) {
    alert(e.message);
  }
}

export const employeeDelete = ({ uid }) => async(dispatch) => {
  const { currentUser } = firebase.auth();

  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()

    dispatch({ type: employee_reset });
  } catch (e) {
    alert(e.message);
  }
}