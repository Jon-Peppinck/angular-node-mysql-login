import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private signupUrl = "http://localhost:3001/auth/signup";
  private loginUrl = "http://localhost:3001/auth/login";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  signup(user: Omit<User, "id">): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.signupUrl, user, this.httpOptions);
    // .pipe(catchError(error => of(`Error: ${error}`);
  }

  public login(email: string, password: string) {
    return this.http.post(this.loginUrl, { email, password }, this.httpOptions);
  }
}
