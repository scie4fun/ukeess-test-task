package com.ukeess.task.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ukeess.task.domain.Employee;
import com.ukeess.task.services.EmployeeService;

@RestController
@RequestMapping("employees/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class EmployeeController {

    private EmployeeService service;

    public EmployeeController(@Autowired EmployeeService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Employee findEmployee(@PathVariable int id) {
        return service.find(id);
    }
    
    @GetMapping
    @ResponseBody
    public List<Employee> findEmployees() {
        return service.findAll();
    }
    
    @PostMapping("/new")
    public Employee addNewEmployee(@RequestBody Employee newEmployee) {
        if (newEmployee != null && 
                newEmployee.getId() == 0) 
        {
            return service.add(newEmployee);
        }
        return null;
    }
    
    @PutMapping("/update")
    public Employee updateEmployee(@RequestBody Employee updatedEmployee) {
        if (updatedEmployee != null && service.find(updatedEmployee.getId()) != null) 
        {
            return service.add(updatedEmployee);
        }
        return null;
    }
    
    @DeleteMapping("/delete/{id}")
    public boolean deleteEmployee(@PathVariable int id) {
        if (service.find(id) != null) 
        {
            service.delete(id);
            return true;
        }
        return false;
    }
    
    @GetMapping("/filter/{token}")
    @ResponseBody
    public List<Employee> filterByNameStartsWith(@PathVariable String token) {
        return service.findByNameStartsWith(token);
    }
}
