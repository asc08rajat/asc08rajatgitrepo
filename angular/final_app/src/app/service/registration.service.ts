import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../model/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class LoginService{
 baseUrl:string="http://localhost:3000/Login"

 constructor(private httpclient:HttpClient){

 }
 getLoginCred(){
    return this.httpclient.get<Login[]>(this.baseUrl);
 }

 getLoginCredById(id:number){
    return this.httpclient.get<Login>(this.baseUrl+'/'+id);
 }

 createLoginCred(login:Login){
    return this.httpclient.post<Login>(this.baseUrl,login)
 }

 updateLoginCred(id:number,login:Login){
    return this.httpclient.put<Login>(this.baseUrl+'/'+id,login)
 }

 deleteLoginCred(id:number){
    return this.httpclient.delete<Login>(this.baseUrl+'/'+id)
 }

 
 
 

}