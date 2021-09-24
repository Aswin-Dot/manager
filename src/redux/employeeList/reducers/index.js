import { employees_fetch } from "../types";

const initialState = { eList: null };

export default employeeListReducer = (state = initialState, action) => {
    switch (action.type) {
        case employees_fetch:
            return { ...state, eList: action.payload };
        default:
            return { ...state };
    }
}