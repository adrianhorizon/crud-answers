import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService: QuestionService) {}

  @Input() sort = '-createdAt';
  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionService
      .getQuestions(this.sort)
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      });
  }

}
