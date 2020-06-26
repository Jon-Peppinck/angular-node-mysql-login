import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";

import { User } from "../models/User";

import { ErrorHandlerService } from "./error-handler.service";
import { first, tap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private signupUrl = "http://localhost:3001/auth/signup";
  private loginUrl = "http://localhost:3001/auth/login";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.signupUrl, user, this.httpOptions).pipe(
      first(),
      tap(() => this.router.navigate(["login"])),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
  }

  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{ token: string; userId: Pick<User, "id"> }> {
    return this.http
      .post(this.loginUrl, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["polls"]);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("login")
        )
      );
  }
}
