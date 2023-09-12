import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import {AddCourseService} from '../../service/add-course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-user',
  templateUrl: './course-user.component.html',
  styleUrls: ['./course-user.component.css','../home-user/home-user.component.css']
})
export class CourseUserComponent implements OnInit{
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

}
