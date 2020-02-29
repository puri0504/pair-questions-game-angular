import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;

  questions: { id: string, text: string }[];

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit() {
    this.form = this._formBuilder.group({});

    this.fetchQuestions().then(() => {
      console.log(this.questions);
      this.registerControls();
    });

    console.log(this.form);
  }

  async fetchQuestions(): Promise<any> {
    const snapshot = await firebase.database().ref('/questions').once('value');
    const questions = snapshot.val();
    this.questions = Object.keys(snapshot.val()).map(id => ({
      id,
      text: questions[id]
    }));
  }

  registerControls() {
    this.questions.forEach((question) => {
      this.form.registerControl(question.id, new FormControl(null, Validators.required));
    });
  }

  submit() {
    console.log(this.form.value);

    if (this.form.valid) {
    }
  }
}
