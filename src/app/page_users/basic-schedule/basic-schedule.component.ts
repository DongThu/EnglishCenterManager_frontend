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
  loggedIn: boolean = false;

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    ){

  }
  ngOnInit(){
    this.getCourse();
    if(!localStorage.getItem('accessToken')) {
      this.loggedIn = false;

      // this.router.navigate(['/login-user']);
    }
    else {
      this.loggedIn = true;
      console.log(localStorage.getItem('accessToken'));
  }

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
