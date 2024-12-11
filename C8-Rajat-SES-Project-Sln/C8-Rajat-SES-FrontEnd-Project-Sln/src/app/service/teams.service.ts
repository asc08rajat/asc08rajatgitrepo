import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Teams } from "../model/teams.model";

@Injectable({
    providedIn:"root"
})
export class TeamsService{
    baseUrl:string="http://localhost:8080/api/v4/teams";
    constructor( private httpclient:HttpClient){

    }
    

    getTeams(){
        return this.httpclient.get<Teams[]>(this.baseUrl)
    }

    getTeamsById(id:number){
        return this.httpclient.get<Teams>(this.baseUrl+'/'+id)
    }

    createTeam(teams:Teams){
        return this.httpclient.post(this.baseUrl,teams)
    }

    updateTeam(id:number,teams:any){
        return this.httpclient.put(this.baseUrl+'/'+id,teams)
    }

    deleteTeam(id:number){
        return this.httpclient.delete(this.baseUrl+'/'+id)
    }
    
}