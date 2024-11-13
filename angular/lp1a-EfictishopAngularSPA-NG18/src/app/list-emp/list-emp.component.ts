import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit{

  employees:Employee[];
  searchinpt:any;
  searchEmp:Employee[];
  constructor( private employeeService: EmployeeService, private router:Router){
    this.employeeService=employeeService;
  }
  ngOnInit(): void {
   this.employeeService.getEmployees().subscribe((employeeData)=>{
    this.employees = employeeData;
   }) 
  }
  EmployeeDelete(id:number){
    if(id!==undefined){
   this.employeeService.deleteEmployee(id).subscribe(()=>{
    this.employees=this.employees.filter(employee=>employee.id!==id);
   
   })
  }
  }
  
  updateEmployee(employeeId :number|undefined):void{
    if(employeeId!==undefined){
      this.router.navigate(['update-emp',employeeId])
    }
    else{
      console.log("Employee id is undefined")
    }
  }

  searchEmployee(){
  this.employeeService.getEmployees().subscribe((data)=>{
    this.searchEmp=data.filter(data=>data.id==this.searchinpt);

  })
  }

  logout(){
    sessionStorage.setItem("loggedIn","no");
    this.router.navigate([""])

    
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "logged out sucessfully"
    });

  }
  

}
