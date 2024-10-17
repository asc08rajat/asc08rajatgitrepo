import { User } from "./user";
export class userManager{

    private users:User[]=[];
    addUser(user:User):void{
        this.users.push(user);
    }
    listUser():User[]{
        return this.users;
    }
    removeUser(name:string):void{
        this.users=this.users.filter(user =>user.name !==name);
    }
    
    searchUser(name:string):User{
        const people=this.users.find(user=>user.name==name);
        
        // const people=this.users=this.users.filter(user=>user.name ==name);
         return people;

    }


}





