import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { PollsComponent } from "./components/polls/polls.component";

import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "polls", component: PollsComponent, canActivate: [AuthGuard] },
  // { path: 'poll/:id', component:  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
