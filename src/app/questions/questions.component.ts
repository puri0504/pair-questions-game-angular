import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

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
    const controls = this.getControls();
    this.form = new FormGroup({
      questions: new FormGroup({})
    });

    // this.form.questions
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
