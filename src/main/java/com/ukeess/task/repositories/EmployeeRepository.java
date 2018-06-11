package com.ukeess.task.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ukeess.task.domain.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    @Query(value = "select e from Employee e where e.name like ?1%")
    List<Employee> findByNameStartsWith(String token);
}
