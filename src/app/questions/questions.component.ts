import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
// import * as firebase from "firebase";
import * as firebase from 'firebase/app';
import 'firebase/database';

const QUESTIONS = [
  {
    id: 1,
    text: 'Какого цвета глаза?'
  },
  {
    id: 2,
    text: 'А волосы?'
  },
  {
    id: 3,
    text: 'А брови?'
  },
  {
    id: 4,
    text: 'В ботинки?'
  },
];

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;

  questions = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
    this.getQuestions();

    const controls = this.getControls();
    this.form = new FormGroup({
      questions: new FormGroup({})
    });

    // this.form.questions
  }

  getQuestions() {
    // Get a reference to the database service
    firebase.database().ref('/questions').once('value').then(function(snapshot) {
      console.log(snapshot.val())
    });
  }

  getControls() {
    return this.questions.map((question) => ({
      name: `question_${question.id}`,
      control: new FormControl(null, Validators.required)
    }));
  }

  submit() {
    console.log(this.form.get('questions'));

    if (this.form.valid) {
    }
  }
}
