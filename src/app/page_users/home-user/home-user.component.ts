import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { LoginUserService } from 'src/app/service/login-user.service';
import { AddCourseService } from 'src/app/service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{
  public courses!: Course[];
  selectedMonth: number = 1;

  constructor(
    private AddCourseService: AddCourseService,
    private router: Router,
    ){

  }
  ngOnInit(){
    this.getCourse();
    // this.loadCoursesByMonth();

  }

  public getCourse(): void {
    this.AddCourseService.getCourseAll().subscribe(
      (response: Course[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  loadCoursesByMonth(): void {
    this.AddCourseService.getCourseByMonth(this.selectedMonth).subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

}
