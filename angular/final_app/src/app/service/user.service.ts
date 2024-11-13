import { Injectable } from "@angular/core";

import { Route } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";

@Injectable({
    providedIn:"root"
})
export class userService{
 baseUrl:string="http://localhost:3000/User";


 constructor(private httpclient:HttpClient){

 }

 getUser(){
    return this.httpclient.get<User[]>(this.baseUrl)
 }

 getUserById(id:number){
    return this.httpclient.get<User>(this.baseUrl+"/"+id);
 }

 createUser(user:User){
    return this.httpclient.post(this.baseUrl,user);
 }

 updateUser(id:number,user:User){
    return this.httpclient.put(this.baseUrl+"/"+id,user)

 }

 deleteUser(id:number){
    return this.httpclient.delete(this.baseUrl+"/"+id)
 }

 
}