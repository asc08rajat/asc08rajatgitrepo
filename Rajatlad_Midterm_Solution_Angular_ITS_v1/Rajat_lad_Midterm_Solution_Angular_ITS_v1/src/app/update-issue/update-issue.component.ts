import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IssueService } from '../services/issue.service';
import { Issue } from '../models/issue.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-issue',
  // standalone: true,
  // imports: [],
  templateUrl: './update-issue.component.html',
  styleUrl: './update-issue.component.css'
})
export class UpdateIssueComponent implements OnInit {

  id: number = 0;
  issue: Issue = new Issue();
  constructor(private issueService: IssueService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.issue= new Issue();
    this.issueService.getIssueById(this.id).subscribe(searchedIssue =>{
      this.issue=searchedIssue;
    },error=>console.log(error));
  }

  updateIssue():void{
    this.issueService.updateIssue(this.id,this.issue)
    .subscribe(updatedIssue=>{console.log(updatedIssue)},error=>console.log(error)
  );
  this.router.navigate(['/issue-list']);
  
  }
  onSubmit(){
    
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
      title: "Updated successfully"
    });
  }
}
