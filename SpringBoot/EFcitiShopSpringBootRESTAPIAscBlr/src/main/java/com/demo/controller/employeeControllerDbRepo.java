package com.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.repository.employeeRepository;

@RestController
@RequestMapping("/api/v1")
public class employeeControllerDbRepo {

    //Dependency injection?
    

    @Autowired
    private employeeRepository employeeRepository;
    @GetMapping("/employees")
    public List getEmployeeList(){
      return employeeRepository.findAll();
        

    }
}
