import { QuestionComponent } from './question.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];
