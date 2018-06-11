import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../domain/employee';
import { Department } from '../../domain/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  nameInput: string;
  activeRadioOptions: string[] = ['no', 'yes'];
  employeeToEditActiveOption: string;
  departmentsNames: string[] = ['HR', 'Tech', 'Finance'];
  departmentOption: string;

  constructor(
    private employeeService: EmployeesService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this.employeeService.selectedEmployee) {
      this.nameInput = this.employeeService.selectedEmployee.name;
      this.employeeToEditActiveOption = this.employeeService.selectedEmployee.active ? 'yes' : 'no';
      this.departmentOption = this.employeeService.selectedEmployee.department.name;
    } else {
      this.employeeToEditActiveOption = 'yes';
      this.departmentOption = 'Tech';
    }
  }

  update(): void {
    if (this.employeeService.selectedEmployee) {
      let msg: string = 'Do you want to update employee ' + this.nameInput + '?';
      if (confirm(msg)) {
        let departmentId: number = this.getDepartmentIdByItsName();
        let department: Department = new Department(departmentId, this.departmentOption);
        this.employeeService.selectedEmployee.department = department;
        this.employeeService.selectedEmployee.name = this.nameInput;
        this.employeeService.selectedEmployee.active = this.getIsActiveByOptionValue();
        this.employeeService.update();
        alert('New employee successfully updated!');
        this._router.navigate(['/']);
      }    
    } else {
      alert('No any employee selected to edit yet!');
    }
  }

  private getDepartmentIdByItsName(): number {
    switch(this.departmentOption) {
      case 'HR': return 1;
      case 'Tech': return 2;
      case 'Finance': return 3;
    }
  }

  private getIsActiveByOptionValue(): number {
    return this.employeeToEditActiveOption === 'yes' ? 1 : 0;
  }

}
