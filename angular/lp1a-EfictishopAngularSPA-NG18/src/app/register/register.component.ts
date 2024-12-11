import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  faUser=faUser
  faHouse=faHouse
registerForm:FormGroup;
submitted=false;

constructor(private formBuilder:FormBuilder, private router:Router){}

ngOnInit(): void {
  this.registerForm=this.formBuilder.group({
    adminName:['',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]],
    Password:['',[Validators.required]],
    Salary:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]
  });
}
onSubmit(){
  
  this.submitted=true;
  if(this.registerForm.invalid){
    return;
  }
  console.log('Form submitted Sucessfully',this.registerForm.value);
  this.router.navigate(['/']);
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
    title: "Registered successfully"
  });
}
signIn(){
  console.log("sign in redirected");
  this.router.navigate(['/Login']);
}
}
