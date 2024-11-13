import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from '../service/user.service';
import { User } from '../model/user.model';
import { Login } from '../model/user.model';
import { LoginService } from '../service/registration.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

 
  registerForm:FormGroup
  submitted=false
  login:Login[]
  user:User[]
  

constructor( private router:Router , private formBuilder:FormBuilder, private userService:userService, private loginService:LoginService){
  

}

  /**
   * Initializes the registration form with various form fields.
   * The form fields include Name, Email, userName, Password, DOB, Age, Gender, Beverage, Meal, and Payment.
   * This method is called when the RegisterComponent is initialized.
   */
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
    Name:[''],
    Email: [''],
    userName:[''],
    Password:[''],
    DOB: [''],
    Age: [''],
    Gender: [''],
    Beverage:[''],
    Meal:[''],
    Payment:['']
  })
    }
    

    onSubmit(){
      const randomId = uuidv4();
      this.submitted=true;
      if(this.registerForm.invalid){
        return;
      }
      const loginCredentials = {
        id:randomId,
        userName: this.registerForm.get('userName')?.value,
        password: this.registerForm.get('Password')?.value
      };
      
      this.router.navigate(['/login'])
      
      const userCredentials = {
        id:randomId,
        Name: this.registerForm.get('Name')?.value,
        Email: this.registerForm.get('Email')?.value,
        DOB: this.registerForm.get('DOB')?.value,
        Age: this.registerForm.get('Age')?.value,
        Gender: this.registerForm.get('Gender')?.value,
        Beverage: this.registerForm.get('Beverage')?.value,
        Meal: this.registerForm.get('Meal')?.value,
        Payment: this.registerForm.get('Payment')?.value
      };
      this.loginService.createLoginCred(loginCredentials).subscribe(data=>{
        console.log(data)
      

      this.userService.createUser(userCredentials).subscribe(data=>{
        console.log(data)
      })
    })
      
    }
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { userService } from '../service/user.service';
// import { User } from '../model/user.model';
// import { Login } from '../model/user.model';
// import { LoginService } from '../service/registration.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit {
  
//   registerForm: FormGroup;
//   submitted = false;
//   login: Login[];
//   user: User[];

//   constructor(
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private userService: userService,
//     private loginService: LoginService
//   ) {}

//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       Name: [''],
//       Email: [''],
//       userName: [''],
//       Password: [''],
//       DOB: [''],
//       Age: [''],
//       Gender: [''],
//       Beverage: [''],
//       Meal: [''],
//       Payment: ['']
//     });
//   }

//   onSubmit() {
//     this.submitted = true;
    
//     if (this.registerForm.invalid) {
//       return;
//     }
//     // const randomId = Math.floor(Math.random() * 1000000) + 1;
//     const randomId = uuidv4();
//     // First get the next available ID from the login service
//     this.loginService.getNextId().subscribe(nextId => {
//       const loginCredentials = {
//         id: randomId,
//         userName: this.registerForm.get('userName')?.value,
//         password: this.registerForm.get('Password')?.value
//       };
//       const userCredentials = {
//         id: randomId,
//         Name: this.registerForm.get('Name')?.value,
//         Email: this.registerForm.get('Email')?.value,
//         DOB: this.registerForm.get('DOB')?.value,
//         Age: this.registerForm.get('Age')?.value,
//         Gender: this.registerForm.get('Gender')?.value,
//         Beverage: this.registerForm.get('Beverage')?.value,
//         Meal: this.registerForm.get('Meal')?.value,
//         Payment: this.registerForm.get('Payment')?.value
//       };

//       // Create login credentials with the ID
//       this.loginService.createLoginCred(loginCredentials).subscribe(() => {
//         // Create user credentials with the same ID
        

//         this.userService.createUser(userCredentials).subscribe(() => {
//           this.router.navigate(['/login']);
//         });
//       });
//     });
//   }
// }
