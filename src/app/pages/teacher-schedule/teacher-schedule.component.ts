import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherScheduleList } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.css']
})
export class TeacherScheduleComponent implements OnInit{
  public teacherScheduleList!: TeacherScheduleList[];

  constructor(
    private teacherService: TeacherService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getTeacherList();
  }

  public getTeacherList(): void {
    this.teacherService.getTeacherList().subscribe(
      (response: TeacherScheduleList[]) => {
        this.teacherScheduleList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateTeacherSchedule(id: number){
    this.router.navigate(['update-teacher-schedule', id]);
  }


  public onDeleteTeacherSchedule(teacherScheduleId: number): void {
    this.teacherService.deleteTeacherSchedule(teacherScheduleId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTeacherList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
