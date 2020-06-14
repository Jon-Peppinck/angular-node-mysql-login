import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";
import { first } from "rxjs/operators";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;

  private signupUrl = "http://localhost:3001/auth/signup";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  user = {
    name: "hp5",
    email: "hp5@test.com",
    password: "password",
  };

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  signup() {
    this.authService
      .signup(this.loginForm.value)
      .pipe(first())
      .subscribe((msg) => console.log(msg));
  }
}
