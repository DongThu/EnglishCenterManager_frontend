import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizAppAd } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-manager-quiz',
  templateUrl: './manager-quiz.component.html',
  styleUrls: ['./manager-quiz.component.css']
})
export class ManagerQuizComponent implements OnInit{
  public question!: QuizAppAd[];

  constructor(
    private quizappService: QuizappService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getQuestion();
  }

  public getQuestion(): void {
    this.quizappService.getQuestion().subscribe(
      (response: QuizAppAd[]) => {
        this.question = response;
        console.log(this.question)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteQuestion(id: number): void {
    this.quizappService.deleteQuestion(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getQuestion();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

