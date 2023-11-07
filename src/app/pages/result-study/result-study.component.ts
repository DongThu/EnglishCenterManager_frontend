import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { examStudent, examStudentResult } from 'src/app/model/exam';
import { ExamCourseService } from 'src/app/service/exam-course.service';

@Component({
  selector: 'app-result-study',
  templateUrl: './result-study.component.html',
  styleUrls: ['./result-study.component.css']
})
export class ResultStudyComponent implements OnInit{
  public examStudent!: examStudentResult[];

  constructor(
    private AddCourseService: ExamCourseService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getCourse();
  }

  public getCourse(): void {
    this.AddCourseService.getExamStudent().subscribe(
      (response: examStudentResult[]) => {
        this.examStudent = response;
        console.log(this.examStudent)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
