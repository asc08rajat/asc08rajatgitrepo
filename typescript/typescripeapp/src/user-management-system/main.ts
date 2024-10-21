import { User } from "./user";
import { userManager } from "./usermanager";
import * as fs from 'fs';
const User1 = new userManager();

const user:User={
    
    name:"Rajat Lad",
    DOB:"07-03-2002",
    Age:22,
    Email:"rajatlad2002@gmail.com",
    Gender:"male",
    Beverage:"coffee",
   
};

User1.addUser(user);

let users:User[]=User1.listUser();
console.log(users);

const user1:User={
    
     
    name:"Test-user",
    DOB:"07-03-2000",
    Age:24,
    Email:"testuser@gmail.com",
    Gender:"male",
    Beverage:"tea",
};
//add product 2
User1.addUser(user1);
users=User1.listUser();
console.log(users);

//  Save users to a JSON file
const jsonData = JSON.stringify(users, null, 2); // Convert users array to JSON string with pretty formatting
fs.writeFileSync('users.json', jsonData, 'utf8'); // Writing to 'users.json' file in the same directory
console.log('User data has been written to users.json');

// remove user
// User1.removeUser("Rajat Lad");
// users=User1.listUser();
// console.log("after removing");
// console.log(users);

// Update the .json file with the new list of users
// const updatedJsonData = JSON.stringify(users, null, 2);
// fs.writeFileSync('users.json', updatedJsonData, 'utf8');
// console.log('Updated user data has been written to users.json');

// search user
// console.log(User1.searchUser("Rajat Lad"));




