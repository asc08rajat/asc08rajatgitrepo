import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './update-emp.component.html',
  styleUrl: './update-emp.component.css'
})
export class UpdateEmpComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee= new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(searchedEmployee =>{
      this.employee=searchedEmployee;
    },error=>console.log(error));
  }

  updateEmployee():void{
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(updatedEmployee=>{console.log(updatedEmployee)},error=>console.log(error)
  );
  this.router.navigate(['/employees']);
  
  }
  onSubmit(){
    
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
      title: "Updated successfully"
    });
  }
}
