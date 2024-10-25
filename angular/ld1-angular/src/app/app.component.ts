// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   standalone:true,

// })
// export class AppComponent {
//   users = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Doe' },
//     // Add more user objects here
//   ];

//   downloadJSON() {
//     const jsonData = JSON.stringify(this.users, null, 2); // Convert users array to JSON
//     const blob = new Blob([jsonData], { type: 'application/json' }); // Create a Blob with JSON data
//     const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
//     const a = document.createElement('a'); // Create an anchor element
//     a.href = url;
//     a.download = 'users.json'; // Set the download file name
//     a.click(); // Programmatically trigger a click to download the file
//     window.URL.revokeObjectURL(url); // Clean up the object URL
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { userService } from './service/user-service';
// import { User } from './model/user.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })


// export class AppComponent implements OnInit{
//   title = 'ld1-angular11';
//   user ? : User[];
//   constructor(private userService : userService){

//   }
//   ngOnInit(): void {
//     console.log("asynchrously retriveing data from the server");
//     this.userService.getUsers().subscribe(data=> this.user=data);
//   }
// }
// -----------------------------------------------


import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './model/user.model';
import { userService } from './service/user-service';
import { PracticeAppComponent} from './practice-app/practice-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,PracticeAppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ld1-angular11';
  user ? : User[];
 constructor(private userService : userService){

 }
  // Variables to hold form data
  name: string = '';
  Dob: string = '';
  Age: number | null = null;
  Email: string = '';
  Gender: string = '';
  Beverages: string[] = [];
  Meal: string[] = [];

  // Array to hold saved form data
  formData: any[] = [];

  // On component initialization, retrieve data from localStorage
  ngOnInit() {
    console.log("asynchrously retriveing data from the server");
    this.userService.getUsers().subscribe(data=> this.user=data);

    const savedData = localStorage.getItem('formlocal');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  }

  // On form submission
  onSubmit(event: Event) {
    event.preventDefault();
    const newFormEntry = {
      name: this.name,
      Dob: this.Dob,
      Age: this.Age,
      Email: this.Email,
      Gender: this.Gender,
      Beverages: this.Beverages.join(', '),
      Meal: this.Meal.join(', ')
    };

    // Add new entry to formData array
    this.formData.push(newFormEntry);

    // Store data in localStorage
    localStorage.setItem('formlocal', JSON.stringify(this.formData));

    this.userService.addUser(newFormEntry).subscribe(response => {
      console.log('User saved successfully!', response);
    }, error => {
      console.error('Error saving user!', error);
    });

    // Reset form fields after submission
    this.resetForm();
  }

  // To reset form fields
  resetForm() {
    this.name = '';
    this.Dob = '';
    this.Age = null;
    this.Email = '';
    this.Gender = '';
    this.Beverages = [];
    this.Meal = [];
  }
  
  resetTable(){
    this.formData.pop();
  }


  toggleBeverage(beverage: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.Beverages.push(beverage);
    } else {
      const index = this.Beverages.indexOf(beverage);
      if (index > -1) {
        this.Beverages.splice(index, 1);
      }
    }
  }
  
  toggleMeal(mealOption: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.Meal.push(mealOption);
    } else {
      const index = this.Meal.indexOf(mealOption);
      if (index > -1) {
        this.Meal.splice(index, 1);
      }
    }
  }
  
}
