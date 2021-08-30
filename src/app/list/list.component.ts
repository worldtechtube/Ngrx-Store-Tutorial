import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Employee } from '../Models/employee.model';
import * as EmployeeActions from './../actions/employee.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private store: Store<AppState>) {
    this.employees = store.select('employee');
  }

  delEmployee(index) {
    this.store.dispatch(new EmployeeActions.RemoveEmployee(index) )
  }

  ngOnInit(): void {
  }

}
