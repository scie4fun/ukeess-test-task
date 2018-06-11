package com.ukeess.task.services.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ukeess.task.domain.Department;
import com.ukeess.task.repositories.DepartmentRepository;
import com.ukeess.task.services.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    
    private DepartmentRepository repository;
    
    public DepartmentServiceImpl(@Autowired DepartmentRepository repository) {}

    public Department find(long id) {
        return repository.findOne(id);
    }

    public List<Department> findAll() {
        return repository.findAll();
    }
}
