import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { userService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  // standalone: true,
  // imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {

  user:User[];
  

  constructor(private userService:userService, private router:Router){
    this.userService=userService;
  }

  ngOnInit(): void {
   this.userService.getUser().subscribe((data)=>{
    this.user=data;
   })
  }
  onDelete(){
     
    
  }

}
