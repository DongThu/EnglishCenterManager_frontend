import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import {AddCourseService} from '../../service/add-course.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
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
    this.AddCourseService.getCourse().subscribe(
      (response: Course[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateCourse(id: number){
    this.router.navigate(['update-course', id]);
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
