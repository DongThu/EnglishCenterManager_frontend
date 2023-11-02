import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateQuiz } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-exam-topic',
  templateUrl: './exam-topic.component.html',
  styleUrls: ['./exam-topic.component.css']
})
export class ExamTopicComponent implements OnInit{
  public quizs!: CreateQuiz[];

  constructor(
    private quizappService: QuizappService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getQuiz();
  }

  public getQuiz(): void {
    this.quizappService.getQuizAll().subscribe(
      (response: CreateQuiz[]) => {
        this.quizs = response;
        console.log(this.quizs)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteQuiz(id: number): void {
    this.quizappService.deleteQuiz(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getQuiz();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

