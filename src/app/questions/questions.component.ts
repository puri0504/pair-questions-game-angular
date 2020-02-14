import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

const QUESTIONS = [
  {
    text: 'Какого цвета глаза?'
  },
  {
    text: 'А волосы?'
  },
  {
    text: 'А брови?'
  },
  {
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
    this.form = new FormGroup({
      questions: new FormArray(this.getControls())
    });
  }

  getControls() {
    return this.questions.map(() => new FormControl(null, Validators.required));
  }

  submit() {
    console.log(this.form.get('questions'));

    if (this.form.valid) {
    }
  }
}
