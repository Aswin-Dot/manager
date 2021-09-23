import { employee_update } from "../types"

export const employeeUpdate = ({prop, value}) => {
    return {
      type: employee_update,
      payload: {prop, value}
    };
}