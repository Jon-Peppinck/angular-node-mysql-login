import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Poll } from "../models/Poll";
import { User } from "../models/User";

import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class PollService {
  private url = "http://localhost:3001/poll";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Poll[]> {
    return this.http
      .get<Poll[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Poll[]>("fetchAll", []))
      );
  }

  createPost(
    formData: Partial<Poll>,
    userId: Pick<User, "id">
  ): Observable<Poll> {
    return this.http
      .post<Poll>(
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
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Poll>("createPost"))
      );
  }

  deletePost(pollId: Pick<Poll, "id">): Observable<{}> {
    return this.http
      .delete<Poll>(`${this.url}/${pollId}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandlerService.handleError<Poll>("createPost"))
      );
  }
}
