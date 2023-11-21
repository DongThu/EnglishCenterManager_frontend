import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';
@Component({
  selector: 'app-young-schedule',
  templateUrl: './young-schedule.component.html',
  styleUrls: ['./young-schedule.component.css','../home-user/home-user.component.css']
})
export class YoungScheduleComponent implements OnInit{

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
    this.AddCourseService.getCourse2().subscribe(
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
