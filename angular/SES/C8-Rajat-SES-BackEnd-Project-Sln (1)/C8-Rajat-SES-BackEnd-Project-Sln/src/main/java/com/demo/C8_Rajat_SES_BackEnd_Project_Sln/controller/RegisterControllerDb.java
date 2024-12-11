package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Register;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.RegisterRepository;

@RestController
@RequestMapping("/api/v6")
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterControllerDb {

    @Autowired
    private RegisterRepository registerRepository;

    // Get all registers
    @GetMapping("/register")
    public List<Register> getRegisterList() {
        return registerRepository.findAll();
    }

    // Get register by ID
    @GetMapping("/register/{id}")
    public Register getRegisterById(@PathVariable(value = "id") Integer id) {
        return registerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Register not found with ID: " + id));
    }

    // Create a new register
    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register) {
        System.out.println("Create Register!");
        return registerRepository.save(register);
    }
}
