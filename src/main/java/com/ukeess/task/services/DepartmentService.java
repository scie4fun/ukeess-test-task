package com.ukeess.task.services;

import java.util.List;

import com.ukeess.task.domain.Department;

public interface DepartmentService {

    Department find(long id);

    List<Department> findAll();
}
