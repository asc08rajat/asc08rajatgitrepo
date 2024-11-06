import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee.model";


@Component({
    selector:"app-login",
    templateUrl:"./login.component.html",
    styleUrls:["./login.component.css"]
})

export class LoginComponent implements OnInit{
    
    employees:Employee[];
  employeeService:EmployeeService;
  
    
    loginForm:FormGroup;
    constructor(private formBuilder:FormBuilder, private router:Router,employeeService: EmployeeService){
        this.employeeService=employeeService;
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            loginid:["teddy"],
            password:[],
        });
        
    }
    onSubmit(){
        console.log(this.loginForm.value);
        const loginid:string=this.loginForm.get("loginid").value;
        const password:string=this.loginForm.get("password").value;

        if(loginid==="teddy" && password==="teddy"){
            console.log("login sucess");
            sessionStorage.setItem("loggedIn","yes");
            this.router.navigate(["/employees"])

        }else{
            console.log("login failed");
        }
        // const newEmployee: Employee = {
        //     id: null, // Assuming the ID will be generated by the server
        //     name: name,
        //     salary: salary
        //     // Add any other required fields for the Employee model here
        // };
        // this.employeeService.createEmployee(newEmployee).subscribe(data=>{
        //     this.employees.push(data);
        // })
    }

}