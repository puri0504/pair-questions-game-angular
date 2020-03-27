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
  questions: { id: string, text: string, answer: string }[];
  submitted = false;

  constructor(private firebaseService: FirebaseService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({});

    this.firebaseService.getQuestions().subscribe((res) => {
      this.setQuestions(res.docs);
      this.registerControls();
    });
  }

  setQuestions(questions) {
    this.questions = questions.map(question => ({
      id: question.id,
      ...question.data()
    }));
  }

  registerControls() {
    this.questions.forEach((question) => {
      this.form.registerControl(question.id, new FormControl(null, Validators.required));
    });
  }

  submit() {
    const answers = this.form.value;
    this.submitted = true;

    if (this.form.valid) {
      const payload = Object.keys(answers).map((id) => ({
        answer: answers[id],
        question_id: id,
        isCorrect: false,
      }));

      this.firebaseService.setAnswers(payload);
    }
  }
}
