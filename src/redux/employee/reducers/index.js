import { employee_update } from "../types";

const initialState = { phone: "", name: "", shift: ""};

export default employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case employee_update: 
            return {...state, [action.payload.prop] : action.payload.value}
        default: 
            return state;
    }
}