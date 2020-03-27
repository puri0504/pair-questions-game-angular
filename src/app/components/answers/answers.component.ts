import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
  // styleUrls: ['./auth.component.scss']
})
export class AnswersComponent implements OnInit {
  form: FormGroup;
  answers: { question_id: string, question: string, answer: string }[];
  isSubmit = false;

  constructor(private firebaseService: FirebaseService, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({});

    this.getAnswers();
  }

  getAnswers() {
    this.firebaseService.getAnswers().then(answers => {
      console.log('AnswersComponent', answers);
      this.answers = answers;
      this.registerControls();
    });
  }

  registerControls() {
    this.answers.forEach((answer) => {
      this.form.registerControl(answer.question_id, new FormControl(null, Validators.required));
    });
  }

  submit() {
    const formValue = this.form.value;

    console.log(formValue);

    const payload = this.answers.map((answer) => ({
      answer: answer.answer,
      question_id: answer.question_id,
      isCorrect: !!formValue[answer.question_id],
    }));

    this.firebaseService.setAnswers(payload).then(() => {
      this.firebaseService.getResults().then((answers) => {
        this.isSubmit = true;
        console.log('answers', answers);

        const positiveResults = answers.some(answer => answer.isCorrect);
      });
    });
  }
}
