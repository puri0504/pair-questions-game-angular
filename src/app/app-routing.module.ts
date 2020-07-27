import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AuthComponent } from "./components/auth/auth.component";
import { QuestionsComponent } from "./components/questions/questions.component";
import { AnswersComponent } from "./components/answers/answers.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'answers',
    component: AnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
