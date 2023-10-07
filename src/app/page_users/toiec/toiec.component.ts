import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';
import { LoginUserService } from 'src/app/service/login-user.service';

@Component({
  selector: 'app-toiec',
  templateUrl: './toiec.component.html',
  styleUrls: ['./toiec.component.css','../home-user/home-user.component.css']
})
export class ToiecComponent implements OnInit{
  public courses!: Course[];
  loggedIn: boolean = false;

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    private authService: LoginUserService
    ){

  }
  ngOnInit()
  : void {
//     this.getCourse();
//     if(!localStorage.getItem('accessToken')){
//       this.router.navigate(['/login-user']);
//     }
//     else {
//       this.loggedIn = true;
//       console.log(localStorage.getItem('accessToken'));
// }
}
  // {
  //   this.getCourse();
  // }

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

