import { Component, OnInit } from '@angular/core';
import { Employee } from '../../domain/employee';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[];
  filterToken: string;
  pages: number[] = this.range(1, 10);
  currentPage: number = 1;
  pageEmployees: Employee[];

  constructor(
    public employeeService: EmployeesService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(
      data => { 
        this.employees = data;
        this.fillCurrentPageEmployees();  
      }
    );
  }

  filterByNameToken(): void {
    let dataBinding = data => { this.pageEmployees = data; };
    if (this.filterToken !== undefined && this.filterToken !== '') {
      this.employeeService.getFilteredByNameToken(this.filterToken)
        .subscribe(dataBinding);
    } else {
      this.employeeService.getAll().subscribe(dataBinding);
    }
    this.filterToken = '';
  }

  resetFilter(): void {
    this.employeeService.getAll().subscribe(
      data => { this.pageEmployees = data; }
    );
    this.filterToken = '';
  }

  newEmployee(): void {
    this._router.navigate(['/new']);
  }

  edit(selectedEmployee: Employee): void {
    this.employeeService.selectedEmployee = selectedEmployee;
    this._router.navigate(['/edit']);
  }

  delete(id: number, index: number, $event): void {
    let msg: string = 'Are you sure you want to delete ' + 
                      this.employees[index].name + '?';
    if (confirm(msg)) {
      this.employees.splice(index, 1);
      this.pageEmployees.splice(index, 1);
      this.employeeService.delete(id);
    }
    $event.stopPropagation();
  }

  viewEmployee(employee: Employee): void {
    this.employeeService.selectedEmployee = employee;
    this._router.navigate(['/view']);
  }

  changePage(pageNumber: number): void {
    if (this.currentPage !== pageNumber) {
      this.currentPage = pageNumber;
      this.fillCurrentPageEmployees();
    }
  }

  iteratePage(movePage: number): void {
    if (!(this.currentPage + movePage < 1 || this.currentPage + movePage > 10)) 
    {
      this.currentPage += movePage;
      this.fillCurrentPageEmployees();
    }
  }

  private range(start, end) {
    return Array.from({length: (end - start + 1)}, (v, k) => k + start);
  }

  private fillCurrentPageEmployees(): void {
    let start = (this.currentPage - 1) * 10;
    let end = this.currentPage * 10;
    this.pageEmployees = this.employees.slice(start, end);
  }
}
