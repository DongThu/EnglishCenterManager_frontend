import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import {AddCourseService} from '../../service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-child-schedule',
  templateUrl: './child-schedule.component.html',
  styleUrls: ['./child-schedule.component.css','../home-user/home-user.component.css']
})
export class ChildScheduleComponent implements OnInit{
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
    this.router.navigate(['register-course', id]);
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
