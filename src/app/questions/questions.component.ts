import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
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

  questionGroup: FormGroup;

  questions: { id: string, text: string }[];

  constructor(private _formBuilder: FormBuilder) {
  }


  ngOnInit() {
    // this.form =  new FormGroup({
    //   // questions: new FormGroup(controls)
    //   questions: new FormGroup({}),
    // });

    this.form = this._formBuilder.group({
      questions: this._formBuilder.group({})
    });

    this.questionGroup = this.form.get('questions') as FormGroup;

    this.fetchQuestions().then(() => {
      // const controls = this.getControls();

      this.questionGroup.registerControl('question_1', new FormControl(null, Validators.required));
      this.questionGroup.registerControl('question_2', new FormControl(null, Validators.required));
    });

    // this.form = new FormGroup({
    //   // questions: new FormGroup(controls)
    //   questions: new FormGroup({
    //     question_1: new FormControl(null, Validators.required),
    //     question_2: new FormControl(null, Validators.required)
    //   })
    // });

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

  getControls() {
    const controls = {};

    this.questions.forEach(question => {
      controls[question.id] = new FormControl(null, Validators.required)
    });

    return controls;
  }

  submit() {
    console.log(this.form.value);

    if (this.form.valid) {
    }
  }
}
