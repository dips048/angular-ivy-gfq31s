import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, 
          RouterStateSnapshot, Router, UrlTree, CanDeactivate,
          CanLoad,Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanLoad,CanActivate,CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean|UrlTree {
    const url= `/${route.path}`;
    return this.checkLogin(url);
  }

  canActivate(
  next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true|UrlTree {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/login');
  }
}