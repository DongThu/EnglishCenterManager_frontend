import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { examStudent, examStudentResult } from 'src/app/model/exam';
import { ExamCourseService } from 'src/app/service/exam-course.service';
import { AddCourseService } from 'src/app/service/add-course.service';
import { CreateQuiz } from 'src/app/model/quizapp';
import { QuizappService } from 'src/app/service/quizapp.service';

@Component({
  selector: 'app-result-study',
  templateUrl: './result-study.component.html',
  styleUrls: ['./result-study.component.css']
})
export class ResultStudyComponent implements OnInit{
  public examStudent!: examStudentResult[];
  searchName!: string;
  public courses!: Course[];
  public quizs!: CreateQuiz[];
  selectedCourseId!: number;
  selectedQuizId!: number;
  filteredExamStudents: any[] = [];

  constructor(
    private examCourseService: ExamCourseService,
    private AddCourseService: AddCourseService,
    private quizappService: QuizappService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getExamStudent();
    // this.searchStudents();
    this.getCourse();
    this.getQuiz();
  }

  public getExamStudent(): void {
    this.examCourseService.getExamStudent().subscribe(
      (response: examStudentResult[]) => {
        this.examStudent = response;
        console.log(this.examStudent)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  searchStudents() {
    this.examCourseService.searchStudentsByName(this.searchName)
      .subscribe(students => this.examStudent = students);
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

  filterExamStudents() {
    this.examCourseService.getFilteredExamStudents(this.selectedCourseId, this.selectedQuizId).subscribe((data) => {
      this.examStudent = data;
    });
  }
  public deleteExamStudents(timetableId: number): void {
    this.examCourseService.deleteExamStudents(timetableId).subscribe(
      (response: void) => {
        console.log(response);
        this.getExamStudent();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
