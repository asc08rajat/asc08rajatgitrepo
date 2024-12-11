import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registration',
  // standalone: true,
  // imports: [],
  templateUrl: './new-registration.component.html',
  styleUrl: './new-registration.component.css'
})
export class NewRegistrationComponent implements OnInit{
 
   
  loginForm:FormGroup;
  submitted=false;
  PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  constructor(private router:Router, private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
          username:['',[Validators.required]],
          password:['',[Validators.required,Validators.pattern(this.PASSWORD_PATTERN)]],
          phonenumber:['',[Validators.required]]
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigate(['/']);
  }
}
