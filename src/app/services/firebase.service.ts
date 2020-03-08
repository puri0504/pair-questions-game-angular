import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }

  fetchQuestions() {
    return this.firestore.collection('questions').snapshotChanges();
    // const snapshot = await firebase.database().ref('/questions').once('value');
    // return snapshot.val();
  }

  async updateAnswers(questions, values) {
    const answers = {};

    questions.forEach(question => {
      answers['/questions/' + question.id + '/answer'] = values[question.id]
    });

    return await firebase.database().ref().update(answers);
  }
}
