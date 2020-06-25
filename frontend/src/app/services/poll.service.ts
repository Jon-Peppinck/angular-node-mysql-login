import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Poll } from "../models/Poll";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class PollService {
  private url = "http://localhost:3001/poll";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.url, { responseType: "json" });
  }

  createPost(formData: Partial<Poll>, userId: Pick<User, "id">) {
    return this.http.post(
      this.url,
      {
        imgId: 1,
        question: formData.question,
        answer1: formData.answer1,
        answer2: formData.answer2,
        answer3: formData.answer3,
        userId: userId,
      },
      this.httpOptions
    );
  }

  deletePost(pollId: Pick<Poll, "id">) {
    return this.http.delete<Poll>(`${this.url}/${pollId}`, this.httpOptions);
  }
}
