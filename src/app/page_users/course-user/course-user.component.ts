import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import {AddCourseService} from '../../service/add-course.service';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/service/login-user.service';
@Component({
  selector: 'app-course-user',
  templateUrl: './course-user.component.html',
  styleUrls: ['./course-user.component.css','../home-user/home-user.component.css']
})
export class CourseUserComponent implements OnInit{
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

  // handleLogout(){
  //   this.authService.logout();
  //   this.loggedIn = false;
  //   // localStorage.removeItem('accessToken');
  //   this.router.navigate(['/login-user']);
  // }

}
