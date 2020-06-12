import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PollsComponent } from "./components/polls/polls.component";

import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", redirectTo: "/polls", pathMatch: "full" },
  { path: "polls", component: PollsComponent },
  // { path: 'poll/:id', component:  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
