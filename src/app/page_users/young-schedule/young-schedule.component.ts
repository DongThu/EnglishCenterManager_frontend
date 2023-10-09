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

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    ){

  }
  ngOnInit(){
    this.getCourse();


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
