import 'firebase/database';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { zip } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  getQuestions() {
    return this.firestore.collection('questions').get();
  }

  setAnswers(answers: { answer: string, question_id: string, isCorrect: boolean }[]) {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    return username && targetUser && this.firestore.collection('answers').doc(username).set({ [targetUser]: answers });
  }

  getAnswers(): Promise<{ question_id: string, question: string, answer: string }[]> {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    return new Promise((resolve) => {
      zip(
        this.firestore.collection('answers').doc(targetUser).get(),
        this.getQuestions()
      ).subscribe(([answersResponse, questionsResponse]) => {
        const answers = answersResponse.data()[username];
        const questions = questionsResponse.docs;
        const result = questions.map(question => ({
          question_id: question.id,
          question: question.data().text,
          answer: this.getAnswerByQuestionId(answers, question.id)
        }));

        resolve(result);
      });
    });
  }

  getAnswerByQuestionId(answers, id) {
    const answer = answers.find(answer => answer.question_id === id);

    return answer.answer;
  }

  getResults(): Promise<{ question_id: string, isCorrect: boolean, answer: string }[]> {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    return new Promise((resolve) => {
      this.firestore.collection('answers').doc(username).get()
        .subscribe((r) => {
          const answers = r.data()[targetUser];
          resolve(answers);
      });
    });
  }
}
