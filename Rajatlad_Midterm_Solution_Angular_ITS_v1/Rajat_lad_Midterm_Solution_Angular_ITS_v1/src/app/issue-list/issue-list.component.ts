import { Component, OnInit } from '@angular/core';
import { Issue } from '../models/issue.model';
import { Router } from '@angular/router';
import { IssueService } from '../services/issue.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issue-list',
  // standalone: true,
  // imports: [],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit{

issue:Issue[];
searchinpt:any;
searchIssue:Issue[];
constructor(private router:Router, private issueService:IssueService){

}
ngOnInit(): void {
  this.issueService.getIssues().subscribe((issueData)=>{
   this.issue = issueData;
  }) 
 }
 deleteIssue(Issue_Id:number){
   if(Issue_Id!==undefined){
  this.issueService.deleteIssue(Issue_Id).subscribe(()=>{
   this.issue=this.issue.filter(issueData=>issueData.Issue_Id!==Issue_Id);
  
  })
 }
 }
 
 updateIssue(Issue_Id :number|undefined):void{
   if(Issue_Id!==undefined){
     this.router.navigate(['update-issue',Issue_Id])
   }
   else{
     console.log("Employee id is undefined")
   }
 }

 searchEmployee(){
 this.issueService.getIssues().subscribe((data)=>{
   this.searchIssue=data.filter(data=>data.Issue_Id==this.searchinpt);

 })
 }
 addissue(){
  
    this.router.navigate(['/addissue']);
  
 }

 
 logout(){
  sessionStorage.setItem("loggedIn","no");
  this.router.navigate([""])

  
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
    title: "logged out sucessfully"
  });

}
}
