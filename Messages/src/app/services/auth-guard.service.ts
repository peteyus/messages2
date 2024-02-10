import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable()
// TODO PRJ: Refactor around the deprecated interface
export class AuthGuard implements CanActivate {
    constructor(private jwtHelper: JwtHelperService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // get the token from local storage
        const token = localStorage.getItem("jwt");

        // check token expiration
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }

        this.router.navigate(["login"]);
        return false;
    }
}