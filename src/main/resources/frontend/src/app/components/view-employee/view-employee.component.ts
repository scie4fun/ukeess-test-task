import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  name: string;
  active: number;
  departmentName: string;

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    if (this.employeeService.selectedEmployee) {
      this.name = this.employeeService.selectedEmployee.name;
      this.active = this.employeeService.selectedEmployee.active;
      this.departmentName = this.employeeService.selectedEmployee.department.name;
    }
  }

}
