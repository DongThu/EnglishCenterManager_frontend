import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizApp, QuizResponse } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-exam-test',
  templateUrl: './exam-test.component.html',
  styleUrls: ['./exam-test.component.css']
})
export class ExamTestComponent implements OnInit{

  public quizs!: QuizApp[];
  public selectedAnswers!: QuizResponse[];
  quizId!: number;
  // countdown!: number;
  // timer: any;
examId!: number;


  constructor(
    private quizAppService: QuizappService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    ){

  }
  ngOnInit() :void {
    this.quizs = [];
  this.selectedAnswers = [];
  // this.getQuiz();

  this.route.queryParams.subscribe(params => {
    this.examId = params['examId'];
    console.log(this.examId);
  });
    this.quizId = this.route.snapshot.params['quizId'];
    // this.teacherId = +this.route.snapshot.paramMap.get('teacherId');
    this.getQuizById(this.quizId);
  }

  // getTimetableByTeacherId(teacherId: number): void {
  //   this.timetableService.getTimeTableTeacher(teacherId)
  //     .subscribe(timetables => this.timetables = timetables);
  // }

  getQuizById(quizId: number) {
    this.quizAppService.getQuizById(quizId)
      .subscribe((quiz: QuizApp[]) => {
        this.quizs = quiz;
        // this.navigateToQuizPage(quizId);
      });
  }

  // public getQuiz(): void {
  //   this.quizAppService.getQuiz().subscribe(
  //     (response: QuizApp[]) => {
  //       this.quizs = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  selectOption(quiz: QuizResponse, option: string) {
    quiz.response = option;
  }

  submitQuiz() {
    // const quizId = 2; // replace with the actual quiz ID
    this.http.post('http://localhost:8080/quiz/submit/' + this.quizId, this.selectedAnswers)
      .subscribe((result: any) => {
        // handle the result from the backend
        console.log(result);
        this.router.navigate(['/quiz-app-result-test'], { state: { result: result } });
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

  // startCountdown() {
  //   this.timer = setInterval(() => {
  //     this.countdown--;
  //     if (this.countdown <= 0) {
  //       clearInterval(this.timer);
  //       // Xử lý khi hết thời gian
  //     }
  //   }, 1000); // Đếm mỗi giây
  // }
}
