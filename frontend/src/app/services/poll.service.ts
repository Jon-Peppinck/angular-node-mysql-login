import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Poll } from "../models/Poll";

@Injectable({
  providedIn: "root",
})
export class PollService {
  private url = "http://localhost:3001/poll";

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.url, { responseType: "json" });
  }
}
