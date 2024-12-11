import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/Registration.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  failedAttempts = 0;
  maxAttempts = 3;
  // timeoutDuration = 30 * 60 * 1000;
  timeoutDuration = 10;
  isLocked = false;
  remainingAttempts = this.maxAttempts;
  errorMessage: string = '';
 
  constructor(private formBuilder: FormBuilder, private router: Router,private registerService:RegistrationService) { }
 
  ngOnInit() {
    const lockoutTime = sessionStorage.getItem('lockoutTime');
    if (lockoutTime) {
      const currentTime = new Date().getTime();
      const lockoutEndTime = parseInt(lockoutTime, 10);
      if (currentTime < lockoutEndTime) {
        this.isLocked = true;
        this.remainingAttempts = 0;
      } else {
        sessionStorage.removeItem('lockoutTime');
      }
    }
 
    this.loginForm = this.formBuilder.group({
      emailid: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['Admin@123', Validators.required]
    });
  }
 
  get formControls() {
    return this.loginForm.controls;
  }
 
//   onSubmit() {
//     this.submitted = true;
//     this.errorMessage = '';
 
//     if (this.loginForm.invalid) {
//       return;
//     }
 
//     const emailid = this.loginForm.get('emailid')?.value;
//     const password = this.loginForm.get('password')?.value;
 
//     if (emailid === 'admin@gmail.com' && password === 'Admin@123') {
//       sessionStorage.setItem('loggedIn', 'yes');
//       this.router.navigate(['/dashboard']);
//     } else {
//       this.failedAttempts++;
//       this.remainingAttempts = this.maxAttempts - this.failedAttempts;
//       this.errorMessage = 'Email or password is incorrect'; // Display error message
      
      
//       if (this.failedAttempts >= this.maxAttempts) {
//         this.isLocked = true;
//         const lockoutEndTime = new Date().getTime() + this.timeoutDuration;
//         sessionStorage.setItem('lockoutTime', lockoutEndTime.toString());
 
//         setTimeout(() => {
//           this.isLocked = false;
//           this.failedAttempts = 0;
//           this.remainingAttempts = this.maxAttempts;
//         }, this.timeoutDuration);
//       }
//     }
//   }
// }
onSubmit() {
  this.submitted = true;
  this.errorMessage = '';
  if(this.loginForm.valid){
    const{emailid,password}=this.loginForm.value;
    this.registerService.getRegister().subscribe((data)=>{
      const user = data.find((user: any) => user.email === emailid && user.password === password);
      if (user) {
        sessionStorage.setItem('loggedIn', 'yes');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
        this.failedAttempts++;
        this.remainingAttempts = this.maxAttempts - this.failedAttempts;
        this.errorMessage = 'Email or password is incorrect'; // Display error message
        
       
        
        if (this.failedAttempts >= this.maxAttempts) {
          this.isLocked = true;
          const lockoutEndTime = new Date().getTime() + this.timeoutDuration;
          sessionStorage.setItem('lockoutTime', lockoutEndTime.toString());
   
          setTimeout(() => {
            this.isLocked = false;
            this.failedAttempts = 0;
            this.remainingAttempts = this.maxAttempts;
          }, this.timeoutDuration);
        }

      }
    }
    
    )
  }
}
}