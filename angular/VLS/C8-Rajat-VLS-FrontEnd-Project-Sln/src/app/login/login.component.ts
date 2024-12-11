// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {

//   loginForm:FormGroup;
//   submitted=false;
//   PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

//   constructor(private router:Router, private formBuilder:FormBuilder){

//   }
//   ngOnInit(): void {
//     this.loginForm=this.formBuilder.group({
//           username:['admin@gmail.com',[Validators.required]],
//           password:['Admin@2002',[Validators.required,Validators.pattern(this.PASSWORD_PATTERN)]]
//     });
//   }

//   onSubmit(){
//     this.submitted=true;
//     if(this.loginForm.invalid){
//       return;
//     }
//     this.router.navigate(['/dashboard']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin@gmail.com', [Validators.required]],
      password: ['Admin@2002', [Validators.required, Validators.pattern(this.PASSWORD_PATTERN)]]
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // If form is invalid, return
    if (this.loginForm.invalid) {
      return;
    }

    // Store login state in localStorage or sessionStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
