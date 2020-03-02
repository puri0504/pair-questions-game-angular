import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'firebase/database';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;

  questions: { id: string, text: string }[];

  constructor(private firebaseService: FirebaseService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({});

    this.firebaseService.fetchQuestions().then((questions) => {
      this.setQuestions(questions);
      this.registerControls();
    });
  }

  setQuestions(questions) {
    this.questions = Object.keys(questions).map(id => ({
      id,
      ...questions[id]
    }));
    console.log(this.questions);
  }

  registerControls() {
    this.questions.forEach((question) => {
      this.form.registerControl(question.id, new FormControl(null, Validators.required));
    });
  }

  submit() {
    console.log(this.form);
    if (this.form.valid) {
      this.firebaseService.updateAnswers(this.questions, this.form.value).catch((err) => {
        // display error for user
        console.error(err)
      });
    }
  }
}
