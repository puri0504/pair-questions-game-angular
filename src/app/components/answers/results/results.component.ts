import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
  // styleUrls: ['./auth.component.scss']
})
export class ResultsComponent implements OnInit {
  answers: { question_id: string, isCorrect: boolean, answer: string }[];
  positiveCount = 0;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getResults();
  }

  getResults() {
    this.firebaseService.getResults().then((answers) => {
      this.answers = answers;

      const positiveResults = answers.filter(answer => answer.isCorrect);
      this.positiveCount = positiveResults.length;
    });
  }
}
