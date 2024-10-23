import { Component, OnInit } from '@angular/core';

import { userService } from './service/user-service';
import { User } from './model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit{
  title = 'ld1-angular11';
  users?:User[];
  constructor(private userService : userService){

  }
  ngOnInit(): void {
    console.log("asynchrously retriveing data from the server");
    this.userService.getUsers().subscribe(data=> this.users=data);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { userService } from './service/user-service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'ld1-angular11';
//   // Variables to hold form data
//   name: string = '';
//   dob: string = '';
//   age: number | null = null;
//   email: string = '';
//   gender: string = '';
//   beverages: string[] = [];
//   meal: string[] = [];

//   // Array to hold saved form data
//   formData: any[] = [];

//   // On component initialization, retrieve data from localStorage
//   ngOnInit() {
//     const savedData = localStorage.getItem('formlocal');
//     if (savedData) {
//       this.formData = JSON.parse(savedData);
//     }
//   }

//   // On form submission
//   onSubmit(event: Event) {
//     event.preventDefault();
//     const newFormEntry = {
//       name: this.name,
//       dob: this.dob,
//       age: this.age,
//       email: this.email,
//       gender: this.gender,
//       beverages: this.beverages.join(', '),
//       meal: this.meal.join(', ')
//     };

//     // Add new entry to formData array
//     this.formData.push(newFormEntry);

//     // Store data in localStorage
//     localStorage.setItem('formlocal', JSON.stringify(this.formData));

//     // Reset form fields after submission
//     this.resetForm();
//   }

//   // To reset form fields
//   resetForm() {
//     this.name = '';
//     this.dob = '';
//     this.age = null;
//     this.email = '';
//     this.gender = '';
//     this.beverages = [];
//     this.meal = [];
//   }
  
//   resetTable(){
//     this.formData.pop();
//   }


//   toggleBeverage(beverage: string, event: Event) {
//     const isChecked = (event.target as HTMLInputElement).checked;
//     if (isChecked) {
//       this.beverages.push(beverage);
//     } else {
//       const index = this.beverages.indexOf(beverage);
//       if (index > -1) {
//         this.beverages.splice(index, 1);
//       }
//     }
//   }
  
//   toggleMeal(mealOption: string, event: Event) {
//     const isChecked = (event.target as HTMLInputElement).checked;
//     if (isChecked) {
//       this.meal.push(mealOption);
//     } else {
//       const index = this.meal.indexOf(mealOption);
//       if (index > -1) {
//         this.meal.splice(index, 1);
//       }
//     }
//   }
  
// }

