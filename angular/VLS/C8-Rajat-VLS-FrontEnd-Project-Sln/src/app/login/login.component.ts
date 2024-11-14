import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
          username:[''],
          password:['']
    });
  }
}
