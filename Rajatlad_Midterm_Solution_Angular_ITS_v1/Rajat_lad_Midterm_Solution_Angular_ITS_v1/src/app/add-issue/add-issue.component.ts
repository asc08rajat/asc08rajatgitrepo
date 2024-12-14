// import{ Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
// import { IssueService } from '../services/issue.service';

 
 
// @Component({
//   selector: 'app-addissue',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './add-issue.component.html',
//   styleUrl: './add-issue.component.css'
// })
// export class AddissueComponent implements OnInit{
//   addIssueForm: FormGroup;
  
//   constructor(private formBuilder: FormBuilder, private router: Router, private issueService: IssueService) { }
//   ngOnInit(): void {
     
//     this.addIssueForm = this.formBuilder.group({
//       Issue_Id : [''],
//       Title: [''],
//       Description: [''],
//       Priority : [''],
//       Status : [''],
//       Assignee : [''],
//       Date : [''],
//       id:['']
 
//     });
  
//   this.addIssueForm.get('Issue_Id').valueChanges.subscribe(value => {
//     this.addIssueForm.patchValue({
//       id: value
//     }, { emitEvent: false });
//   });
// }
// onSubmit() {
 
//   const formValue = this.addIssueForm.value;
//   formValue.id = formValue.issueid;

//   this.issueService.createIssue(formValue).subscribe(data => {
//     this.router.navigate(['/issue-list']);
//   })
// }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../services/issue.service';
 
@Component({
  selector: 'app-addissue',
  templateUrl: './add-issue.component.html',
  styleUrl: './add-issue.component.css'
})
export class AddissueComponent implements OnInit {
  addIssueForm: FormGroup;
  id: number;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private issueService: IssueService) { }
 
  ngOnInit(): void {
    this.addIssueForm = this.formBuilder.group({
      Issue_Id: [''],
      Title: [''],
      Description: [''],
      Priority: [''],
      Status: [''],
      Assignee: [''],
      Date: [''],
      id: ['']
    });
 
   
    this.addIssueForm.get('Issue_Id').valueChanges.subscribe(value => {
      this.addIssueForm.patchValue({
        id: value
      }, { emitEvent: false });
    });
  }
 
  onSubmit() {
 
    const formValue = this.addIssueForm.value;
    formValue.id = formValue.Issue_Id;
 
    this.issueService.createIssue(formValue).subscribe(data => {
      this.router.navigate(['/issue-list']);
    });
  }
}
 