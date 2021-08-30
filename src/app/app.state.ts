import { Employee } from "./Models/employee.model";

export interface AppState {
    readonly employee: Employee[];
}