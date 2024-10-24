
// --------------------------------
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {User} from "../model/user.model"
@Injectable({
    providedIn:'root'
})
export class userService{
baseUrl: string="http://localhost:3000/User";
//performs http requests.
constructor(private http:HttpClient){
 
}
//returns observable
getUsers(){
    return this.http.get<User[]>(this.baseUrl);
}
}