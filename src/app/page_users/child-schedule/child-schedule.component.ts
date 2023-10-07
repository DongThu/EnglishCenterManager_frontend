import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import {AddCourseService} from '../../service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginUserService } from 'src/app/service/login-user.service';
@Component({
  selector: 'app-child-schedule',
  templateUrl: './child-schedule.component.html',
  styleUrls: ['./child-schedule.component.css','../home-user/home-user.component.css']
})
export class ChildScheduleComponent implements OnInit{
  public courses!: Course[];
  // loggedIn: boolean = false;

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    private authService: LoginUserService
    ){

  }
  ngOnInit(){
    this.getCourse();

//     if(!localStorage.getItem('accessToken')){
//       this.router.navigate(['/login-user']);
//     }
//     else {
//       this.loggedIn = true;
//       console.log(localStorage.getItem('accessToken'));
// }
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

  // handleLogout(){
  //   this.authService.logout();
  //   this.loggedIn = false;
  //   // localStorage.removeItem('accessToken');
  //   this.router.navigate(['/login-user']);
  // }
}
