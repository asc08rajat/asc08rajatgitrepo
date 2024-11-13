import { Component, OnInit } from '@angular/core';
import { Login, User } from '../model/user.model';
import { userService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/registration.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  users:User[];
  login:Login[];
  userServeice:userService;
  // loginService:LoginService;
  loginForm:FormGroup;

  constructor(private formbuilder:FormBuilder , private router:Router, private userService:userService, private loginService:LoginService){
    this.userServeice=userService;
    this.loginService=loginService;
}
  



  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      userName:["teddy"],
      password:[],
    });
  }

  onSubmit(){
    
  
  }
}
