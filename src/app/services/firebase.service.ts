import * as firebase from 'firebase/app';
import 'firebase/database';
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  async fetchQuestions(): Promise<object> {
    const snapshot = await firebase.database().ref('/questions').once('value');
    return snapshot.val();
  }

  async updateAnswers(questions, values) {
    const answers = {};

    questions.forEach(question => {
      answers['/questions/' + question.id + '/answer'] = values[question.id]
    });

    return await firebase.database().ref().update(answers);
  }
}
