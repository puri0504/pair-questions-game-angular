import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as firebase from 'firebase/app';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


var app = firebase.initializeApp({
  apiKey: "AIzaSyAkFtYTgx8i7Ny_31BEIUeNH2RYuqdGrBA",
  authDomain: "pair-questions-game.firebaseapp.com",
  databaseURL: "https://pair-questions-game.firebaseio.com",
  projectId: "pair-questions-game",
  storageBucket: "pair-questions-game.appspot.com",
  messagingSenderId: "454920173495",
  appId: "1:454920173495:web:c611844d40a3640297da32"
});
