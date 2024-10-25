import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { userService } from '../service/user-service';

@Component({
  selector: 'app-practice-app',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './practice-app.component.html',
  styleUrls: ['./practice-app.component.css'],
})


export class PracticeAppComponent {
  addForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private userService:userService){
    this.addForm=this.formBuilder.group({
     id:[],
     name:[],
     salary:[] 
    });
  }
}
  