package com.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dom.entity.employee;

//purpose of spring component?


@Repository
public interface employeeRepository  extends JpaRepository<employee, Integer> {
}