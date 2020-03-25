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

  updateAnswer(id, answer) {
    const username = this.authService.getUsername();
    const targetUser = this.authService.getTargetUser();

    return username && targetUser && this.firestore.collection('answers').doc(username).set({ [targetUser]: { [id] : { answer } } });
  }
}
