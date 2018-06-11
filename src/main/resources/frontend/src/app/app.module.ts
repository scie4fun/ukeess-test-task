import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './services/employees.service';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'new', component: NewEmployeeComponent, pathMatch: 'full' },
  { path: 'edit', component: EditEmployeeComponent, pathMatch: 'full' },
  { path: 'view', component: ViewEmployeeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    PageNotFoundComponent,
    ViewEmployeeComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
