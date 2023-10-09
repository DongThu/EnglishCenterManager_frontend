import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { LoginUserService } from 'src/app/service/login-user.service';
import { AddCourseService } from 'src/app/service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-basic-schedule',
  templateUrl: './basic-schedule.component.html',
  styleUrls: ['./basic-schedule.component.css','../home-user/home-user.component.css']
})
export class BasicScheduleComponent implements OnInit{

  public courses!: Course[];

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    ){

  }
  ngOnInit(){
    this.getCourse();


  }

  public getCourse(): void {
    this.AddCourseService.getCourse5().subscribe(
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

}
