import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult } from "@angular/router";
import { Router } from "@angular/router";
import { AuthorizationService } from "../services/authorization.service";

@Injectable({
	providedIn: 'root'
})

export class RouteGuard implements CanActivate {

	constructor(private service:AuthorizationService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
		if (!this.service.isLoggedIn()) {
	  		this.router.navigate(['/login']);
	  		return false;
	  	}
	  	return true;
    }
}