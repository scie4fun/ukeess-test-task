package com.ukeess.task.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ukeess.task.domain.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
