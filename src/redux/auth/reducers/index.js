import {
  email_changed,
  password_changed,
  login_successful,
  login_failure,
  loading_spinner,
  logout_user,
} from "../types";

const initialState = {email: '', password: '', user: null, error: "", loading: false};

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
      case email_changed:
        return { ...state, email: action.payload, error: '' };
      case password_changed:
        return { ...state, password: action.payload, error: '' };
      case login_successful:
        return { ...initialState, user: action.payload };
      case login_failure:
        return { ...initialState, error: action.payload };
      case loading_spinner:
        return { ...state, loading: true}
      case logout_user: 
        return { ...initialState}
      default:
        return state;
    }
}
