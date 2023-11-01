import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/model/exam';
import { ExamCourseService } from 'src/app/service/exam-course.service';

@Component({
  selector: 'app-exam-course',
  templateUrl: './exam-course.component.html',
  styleUrls: ['./exam-course.component.css']
})
export class ExamCourseComponent implements OnInit{
  public exams!: Exam[];

  constructor(
    private examCourseService: ExamCourseService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getExam();
  }

  public getExam(): void {
    this.examCourseService.getExam().subscribe(
      (response: Exam[]) => {
        this.exams = response;
        console.log(this.exams)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
