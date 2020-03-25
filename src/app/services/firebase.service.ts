import 'firebase/database';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  fetchQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
  }

  setAnswers(answers: {}) {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    return username && targetUser && this.firestore.collection('answers').doc(username).set({ [targetUser]: answers });
  }

  updateAnswer(id, answer) {
    const username = this.authService.username.value;
    const targetUser = this.authService.targetUser.value;

    return username && targetUser && this.firestore.collection('answers').doc(username).set({ [targetUser]: { [id] : { answer } } });
  }
}
