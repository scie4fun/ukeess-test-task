import { Component } from '@angular/core';
import { Department } from '../../domain/department';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../domain/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  nameInput: string;
  activeRadioOptions: string[] = ['no', 'yes'];
  employeeToEditActiveOption: string;
  departmentsNames: string[] = ['HR', 'Tech', 'Finance'];
  departmentOption: string;

  constructor(
    private employeeService: EmployeesService, 
    private _router: Router
  ) { }

  newEmployee(): void {
    let nameValidation = this.nameInput !== undefined && this.nameInput !== '';
    let activeValidation = this.employeeToEditActiveOption !== undefined;
    let departmentValidation = this.departmentOption !== undefined;
    
    if (!nameValidation) {
      alert('No name specified!');
    } else if (!activeValidation) {
      alert('Active status not specified!');
    } else if (!departmentValidation) {
      alert('Department not specified!');
    } else {
      let departmentId: number = this.getDepartmentIdByItsName();
      let department: Department = new Department(departmentId, this.departmentOption);
      let name = this.nameInput;
      let active = this.getIsActiveByOptionValue();
      let newEmployee = new Employee(null, name, active, department);
      this.employeeService.create(newEmployee);
      alert('New employee successfully created!');
      this._router.navigate(['/']);
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
    return this.employeeToEditActiveOption === 'yes' &&
           this.employeeToEditActiveOption !== undefined ? 1 : 0;
  }

}
