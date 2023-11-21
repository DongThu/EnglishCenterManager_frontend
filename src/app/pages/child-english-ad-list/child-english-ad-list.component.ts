import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChildSchedule, Course } from 'src/app/model/course';
import { RegisterCourseService } from 'src/app/service/register-course.service';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-child-english-ad-list',
  templateUrl: './child-english-ad-list.component.html',
  styleUrls: ['./child-english-ad-list.component.css']
})
export class ChildEnglishAdListComponent implements OnInit{
  public childRegisterList!: ChildSchedule[];
  public courses!: Course[];
  selectedCourseId!: number;
  constructor(
    private registerCourseService: RegisterCourseService,
    private AddCourseService: AddCourseService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getRegisterListChild();
    this.getCourse();
  }

  public getRegisterListChild(): void {
    this.registerCourseService.getRegisterListChild().subscribe(
      (response: ChildSchedule[]) => {
        this.childRegisterList = response;
        console.log(this.childRegisterList)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRegisterListChild(registerId: number): void {
    this.registerCourseService.deleteRegisterListChild(registerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRegisterListChild();
      },
      (error: HttpErrorResponse) => {
        alert("Bạn không thể xóa người này!");
      }
    );
  }

  public getCourse(): void {
    this.AddCourseService.getCourseAll().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log(this.courses)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getRegistrations(courseId: number): void {
    this.registerCourseService.getRegistrationsForCourse(courseId)
      .subscribe(childRegisterList => this.childRegisterList = childRegisterList);
  }
}
