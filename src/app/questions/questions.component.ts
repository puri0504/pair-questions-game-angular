import { Component, OnInit } from '@angular/core';

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

  questions = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
