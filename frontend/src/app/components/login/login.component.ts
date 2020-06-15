import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { tap } from "rxjs/operators";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  private loginUrl = "http://localhost:3001/auth/login";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  login() {
    // TODO: consider unsubscribing
    this.authService
      .login("test2@test.com", "password")
      .pipe(
        tap((tokenObject: any) => {
          localStorage.setItem("token", tokenObject.token);
        })
      )
      .subscribe();
  }
}
