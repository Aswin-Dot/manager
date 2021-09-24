import { employee_update, employee_reset } from "../types";

const initialState = { phone: "", name: "", shift: ""};

export default employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case employee_update: 
            return {...state, [action.payload.prop] : action.payload.value};
        case employee_reset:
            return {...initialState }
        default: 
            return state;
    }
}