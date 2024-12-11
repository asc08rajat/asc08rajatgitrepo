import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Teams } from "../model/teams.model";
import { Register } from "../model/register.model";

@Injectable({
    providedIn:"root"
})
export class RegistrationService{
    baseUrl:string="http://localhost:8080/api/v6/register";
    constructor( private httpclient:HttpClient){

    }
    

    getRegister(){
        return this.httpclient.get<Register[]>(this.baseUrl)
    }

    getregisterById(id:number){
        return this.httpclient.get<Register>(this.baseUrl+'/'+id)
    }

    createregister(register:Register){
        return this.httpclient.post(this.baseUrl,register)
    }

    updateregister(id:number,register:any){
        return this.httpclient.put(this.baseUrl+'/'+id,register)
    }

    deleteregister(id:number){
        return this.httpclient.delete(this.baseUrl+'/'+id)
    }
    
}