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

    this.fetchQuestions().then((questions) => {
      this.setQuestions(questions);
      this.registerControls();
    });
  }

  async fetchQuestions(): Promise<any> {
    const snapshot = await firebase.database().ref('/questions').once('value');
    return snapshot.val();
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
      this.updateAnswers().catch((err) => {
        // display error for user
        console.error(err)
      });
    }
  }

  async updateAnswers() {
    const answers = {};

    this.questions.forEach(question => {
      answers['/questions/' + question.id + '/answer'] = this.form.value[question.id]
    });

    return await firebase.database().ref().update(answers);
  }
}
