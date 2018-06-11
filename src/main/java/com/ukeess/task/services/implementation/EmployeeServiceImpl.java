package com.ukeess.task.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ukeess.task.domain.Employee;
import com.ukeess.task.repositories.EmployeeRepository;
import com.ukeess.task.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    
    private EmployeeRepository repository;
    
    public EmployeeServiceImpl(@Autowired EmployeeRepository repository) {
        this.repository = repository;
    }
    
    public Employee find(long id) {
        return repository.findOne(id);
    }
    
    public List<Employee> findAll() {
        return repository.findAll();
    }
    
    public Employee add(Employee newEmployee) {
        return repository.save(newEmployee);
    }

    public void delete(long id) {
        repository.delete(id);
    }

    @Override
    public List<Employee> findByNameStartsWith(String token) {
        return repository.findByNameStartsWith(token);
    }
    
}
