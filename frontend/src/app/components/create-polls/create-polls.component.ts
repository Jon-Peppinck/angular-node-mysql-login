import { Component, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";
import { PollService } from "src/app/services/poll.service";
import { first, tap } from "rxjs/operators";

@Component({
  selector: "app-create-polls",
  templateUrl: "./create-polls.component.html",
  styleUrls: ["./create-polls.component.scss"],
})
export class CreatePollsComponent {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  questionFormControl = new FormControl("", [Validators.required]);
  answer1FormControl = new FormControl("", [Validators.required]);
  answer2FormControl = new FormControl("", [Validators.required]);
  answer3FormControl = new FormControl("", [Validators.required]);

  isOpen = false;

  constructor(
    private authService: AuthService,
    private pollService: PollService
  ) {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      question: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
      answer1: new FormControl("", [Validators.required]),
      answer2: new FormControl("", [Validators.required]),
      answer3: new FormControl("", [Validators.required]),
    });
  }

  onSubmit = (formData) => {
    this.pollService
      .createPost(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
  };
}
