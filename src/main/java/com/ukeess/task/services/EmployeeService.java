package com.ukeess.task.services;

import java.util.List;

import com.ukeess.task.domain.Employee;

public interface EmployeeService {
    
    Employee find(long id);
    
    List<Employee> findAll();
    
    Employee add(Employee newEmployee);
    
    void delete(long id);
    
    List<Employee> findByNameStartsWith(String token);
}
