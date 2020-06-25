import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private signupUrl = "http://localhost:3001/auth/signup";
  private loginUrl = "http://localhost:3001/auth/login";
  // private userUrl = "http://localhost:3001/auth/user";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.signupUrl, user, this.httpOptions);
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">) {
    return this.http.post(this.loginUrl, { email, password }, this.httpOptions);
  }
}
