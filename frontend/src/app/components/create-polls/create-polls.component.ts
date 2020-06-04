import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-create-polls",
  templateUrl: "./create-polls.component.html",
  styleUrls: ["./create-polls.component.scss"],
})
export class CreatePollsComponent {
  form: FormGroup;

  // questionFormControl = new FormControl("", [Validators.required]);
  answer1FormControl = new FormControl("", [Validators.required]);
  answer2FormControl = new FormControl("", [Validators.required]);
  answer3FormControl = new FormControl("", [Validators.required]);

  isOpen = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
    });
  }

  onSubmit(formData) {
    console.log(22, formData);
    this.form.reset();
  }
}
