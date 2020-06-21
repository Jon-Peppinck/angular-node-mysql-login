import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  isSignedIn = false;

  constructor(private http: HttpClient, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.isSignedIn = isLoggedIn;
    });
    return of(this.isSignedIn);
  }
}
