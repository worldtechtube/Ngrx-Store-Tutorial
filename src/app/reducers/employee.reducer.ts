import { Employee } from './../Models/employee.model'
import * as EmployeeActions from './../actions/employee.actions';

// const initialState: Employee = {
//     id: 0,
//     name: 'Initial Employee'    
//}

//export function reducer(state: Employee[] = [initialState], action: EmployeeActions.Actions) {
export function reducer(state: Employee[] = [], action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMP:
            return [...state, action.payload];
        case EmployeeActions.REMOVE_EMP:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}


