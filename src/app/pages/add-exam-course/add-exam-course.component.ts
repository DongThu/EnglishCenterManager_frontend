import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Exam, ExamInput } from 'src/app/model/exam';
import { ExamCourseService } from 'src/app/service/exam-course.service';
import { AddCourseService } from 'src/app/service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateQuiz } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-add-exam-course',
  templateUrl: './add-exam-course.component.html',
  styleUrls: ['./add-exam-course.component.css']
})
export class AddExamCourseComponent {
  question!: ExamInput;
  public courses!: Course[];
  public quizs!: CreateQuiz[];


  constructor(
    private router: Router,
    private examCourseService: ExamCourseService,
    private AddCourseService: AddCourseService,
    private quizappService: QuizappService,

    ){
      this.question = new ExamInput();
    }

  ngOnInit(){
    this.getCourse();
    this.getQuiz();
  }

  public getCourse(): void {
    this.AddCourseService.getCourseAll().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log(this.courses)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  saveCourse(){
    this.examCourseService.addExam(this.question).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/exam-course']);
  }

  onSubmit(){
    console.log(this.question);
    this.saveCourse();
  }
}

