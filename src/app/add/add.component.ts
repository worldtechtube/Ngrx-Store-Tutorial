import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Employee } from './../models/employee.model'
import * as EmployeeActions from './../actions/employee.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addEmployee(id, name) {
    this.store.dispatch(new EmployeeActions.AddEmployee({id: id, name: name}) )
  }

  ngOnInit(): void {
  }

}
