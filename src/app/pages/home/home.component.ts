import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCourse } from 'src/app/model/register-course';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // public register!: RegisterCourse[];

  // constructor(
  //   private registerCourseService: RegisterCourseService,
  //   private router: Router
  //   ){

  // }
  ngOnInit(){
    // this.getRegister();
  }

  // public getRegister(): void {
  //   this.registerCourseService.getCourse().subscribe(
  //     (response: RegisterCourse[]) => {
  //       this.register = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public onDeleteRegister(registerId: number): void {
  //   this.registerCourseService.deleteRegister(registerId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getRegister();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
