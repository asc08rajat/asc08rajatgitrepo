// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css'
// })
// export class DashboardComponent {
 
//     isSidebarCollapsed = false;
  
//     toggleSidebar() {
//       this.isSidebarCollapsed = !this.isSidebarCollapsed;
//     }
   

    
  
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSidebarCollapsed = false;
  isLoggedIn = false; // Flag to check login status

  ngOnInit(): void {
    // On init, check if the user is logged in (from localStorage or sessionStorage)
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Toggle the sidebar visibility
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // Logout method
  logout() {
    // Clear the login state
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;

    // Redirect to the login page
    // You could also use this.router.navigate(['/login']) if you have routing set up.
    window.location.href = '/login'; // You can also use this for a hard reload to the login page
  }
}
