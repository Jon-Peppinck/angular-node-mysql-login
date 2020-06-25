import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PollService } from "src/app/services/poll.service";
import { Poll } from "src/app/models/Poll";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/User";

@Component({
  selector: "app-polls",
  templateUrl: "./polls.component.html",
  styleUrls: ["./polls.component.scss"],
})
export class PollsComponent implements OnInit {
  polls$: Observable<Poll[]>;
  userId: Pick<User, "id">;

  constructor(
    private pollService: PollService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.polls$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Poll[]> {
    return this.pollService.fetchAll();
  }

  createPost(): void {
    this.polls$ = this.fetchAll();
  }

  delete(pollId: Pick<Poll, "id">): void {
    console.log(pollId);
    this.pollService
      .deletePost(pollId)
      .subscribe(() => (this.polls$ = this.fetchAll()));
  }
}
