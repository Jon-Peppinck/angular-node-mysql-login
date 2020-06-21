import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { PollService } from "src/app/services/poll.service";
import { Poll } from "src/app/models/Poll";

@Component({
  selector: "app-polls",
  templateUrl: "./polls.component.html",
  styleUrls: ["./polls.component.scss"],
})
export class PollsComponent implements OnInit {
  polls$: Observable<Poll[]>;

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.polls$ = this.fetchAll();
  }

  fetchAll(): Observable<Poll[]> {
    return this.pollService.fetchAll();
  }
}
