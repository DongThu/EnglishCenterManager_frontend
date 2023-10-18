import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizApp, QuizResponse } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.css']
})
export class QuizAppComponent implements OnInit{

  public quizs!: QuizApp[];
  public selectedAnswers!: QuizResponse[];
  constructor(
    private quizAppService: QuizappService,
    private router: Router,
    private http: HttpClient
    ){

  }
  ngOnInit(){
    this.quizs = [];
  this.selectedAnswers = [];
  this.getQuiz();


  }

  public getQuiz(): void {
    this.quizAppService.getQuiz().subscribe(
      (response: QuizApp[]) => {
        this.quizs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  selectOption(quiz: QuizResponse, option: string) {
    quiz.response = option;
  }

  submitQuiz() {
    const quizId = 1; // replace with the actual quiz ID
    this.http.post('http://localhost:8080/quiz/submit/' + quizId, this.selectedAnswers)
      .subscribe((result: any) => {
        // handle the result from the backend
        console.log(result);
      });
  }

  selectAnswer(question: number, answer: string) {
    const response = new QuizResponse();
    response.id = question;
    response.response = answer;

    // check if the response for the question already exists
    const existingResponseIndex = this.selectedAnswers.findIndex(r => r.id === question);

    if (existingResponseIndex >= 0) {
      // update the existing response
      this.selectedAnswers[existingResponseIndex] = response;
    } else {
      // add a new response
      this.selectedAnswers.push(response);
    }
  }
}
