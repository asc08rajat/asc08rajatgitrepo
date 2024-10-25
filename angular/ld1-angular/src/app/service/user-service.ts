
// --------------------------------
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {User} from "../model/user.model";
import { Observable } from 'rxjs';
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

addUser(userData: any): Observable<any> {
    return this.http.post<User[]>(this.baseUrl,userData);
}
}


// createUser(user:User){
//     return this.http.post(this.baseUrl,user);
// }