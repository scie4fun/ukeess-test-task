import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../domain/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // baseUrl: string = 'http://localhost:8080/employees/api'; // dev
  baseUrl: string = 'employees/api'; // prod
  selectedEmployee: Employee;

  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  getFilteredByNameToken(token: string): Observable<Employee[]> {
    let filterUrl = this.baseUrl + '/filter/' + token;
    return this.httpClient.get<Employee[]>(filterUrl);
  }

  create(newEmployee: Employee): void {
    let createUrl = this.baseUrl + '/new';
    this.httpClient.post(createUrl, newEmployee).subscribe();
  }

  update(): void {
    let updateUrl = this.baseUrl + '/update';
    this.httpClient.put(updateUrl, this.selectedEmployee).subscribe();
  }

  delete(id: number): void {
    let deleteUrl = this.baseUrl + '/delete/' + id;
    this.httpClient.delete<Employee[]>(deleteUrl).subscribe();
  }
}
