import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { AuthService } from '../../signin/auth.service';
import { NgForm } from '@angular/forms';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }
  }

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    );
    this.questionService.addQuestion(q)
      .subscribe(
        ({ _id }) => this.router.navigate(['/questions', _id]),
        this.authService.handleError
      );
    form.resetForm();
  }

}
