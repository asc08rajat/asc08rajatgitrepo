import { User } from "./user";
import { userManager } from "./usermanager";

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

// remove user
// User1.removeUser("Rajat Lad");
// users=User1.listUser();
// console.log("after removing");
// console.log(users);

// search user
console.log(User1.searchUser("Rajat Lad"));




