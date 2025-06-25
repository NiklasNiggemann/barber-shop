import { Router } from "@angular/router";
import { AuthorizationService } from "../services/authorization.service";

export class Logout {
    constructor(private auth:AuthorizationService, private router:Router)
    {
		this.auth.changed.subscribe((result)=> {
		if (!result)
			this.router.navigate(['/login']);
	    });
	    this.auth.logout();
    }
}