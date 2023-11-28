import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-young-english-ad',
  templateUrl: './young-english-ad.component.html',
  styleUrls: ['./young-english-ad.component.css','../course/course.component.css']
})
export class YoungEnglishAdComponent implements OnInit{
  public courses!: Course[];

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getCourse();
  }

  public getCourse(): void {
    this.AddCourseService.getCourse2().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log(this.courses)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateCourse(id: number){
    this.router.navigate(['update-young-english', id]);
  }
  public onDeleteCourse(courseId: number): void {
    this.AddCourseService.deleteCourse(courseId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCourse();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
