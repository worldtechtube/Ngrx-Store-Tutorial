import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Employee } from './../Models/employee.model'

export const ADD_EMP = '[EMPLOYEE] Add'
export const REMOVE_EMP = '[EMPLOYEE] Remove'

export class AddEmployee implements Action {
    readonly type = ADD_EMP
    constructor(public payload: Employee) {}
}

export class RemoveEmployee implements Action {
    readonly type = REMOVE_EMP
    constructor(public payload: number) {}
}

export type Actions = AddEmployee | RemoveEmployee