import { ActivatedRouteSnapshot, CanActivate, GuardResult, mapToCanActivate, MaybeAsync, Router, RouteReuseStrategy, RouterStateSnapshot } from "@angular/router";

import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthGuardService implements CanActivate{
    constructor(private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(sessionStorage.getItem('loggedIn')=="yes"){
            return true;
        }
        else{
            this.router.navigate(['/login'])
            return false;
        }
    }

}