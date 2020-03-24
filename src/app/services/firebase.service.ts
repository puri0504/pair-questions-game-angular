import 'firebase/database';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }

  fetchQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
  }

  updateAnswer(id, answer) {
    return this.firestore.collection('answers').doc('alexey').set({ ksenia: { [id] : { answer } } });
  }
}
