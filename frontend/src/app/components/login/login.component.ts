import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";

import { tap, first } from "rxjs/operators";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private authService: AuthService) {}

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
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(
        first(),
        tap((tokenObject: any) => {
          localStorage.setItem("token", tokenObject.token);
          this.authService.isUserLoggedIn$.next(true);
        })
      )
      .subscribe();
  }
}
