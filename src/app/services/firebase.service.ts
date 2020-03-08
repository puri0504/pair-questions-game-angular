import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }

  async fetchQuestions() {
    const questions = this.firestore.collection('questions').snapshotChanges();
    console.log(questions);
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
