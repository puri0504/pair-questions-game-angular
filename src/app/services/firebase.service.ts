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

  setAnswers(answers: { answer: string, question_id: string, isCorrectly: boolean }[]) {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    console.log('answers', answers);

    return username && targetUser && this.firestore.collection('answers').doc(username).set({ [targetUser]: answers });
  }

  getAnswers(): Promise<{ question: string, answer: string }[]> {
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
          question: question.data().text,
          answer: answers[question.id]
        }));

        resolve(result);
      });
    });
  }
}
