import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
  // styleUrls: ['./auth.component.scss']
})
export class AnswersComponent implements OnInit {
  answers: any;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getAnswers().then(answers => {
      console.log('AnswersComponent', answers);

      this.answers = answers;
    });
  }
}
