import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TimeTable } from 'src/app/model/timetable';
import { TeacherService } from 'src/app/service/teacher.service';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-teacher-manager',
  templateUrl: './teacher-manager.component.html',
  styleUrls: ['./teacher-manager.component.css']
})
export class TeacherManagerComponent implements OnInit{
  public teacher!: Teacher[];
  timetables!: TimeTable[];

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private timetableService: TimetableService
    ){

  }
  ngOnInit(){
    this.getTeacher();
  }

  public getTeacher(): void {
    this.teacherService.getTeacher().subscribe(
      (response: Teacher[]) => {
        this.teacher = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateTeacher(id: number){
    this.router.navigate(['update-teacher', id]);
  }

  addTeacherSchedule(id: number){
    this.router.navigate(['add-teacher-schedule', id]);
  }

  findTeacherSchedule(teacherId: number): void {
    this.router.navigate(['/time-table-teacher', teacherId]);
  }

  getTimetableByTeacherId(teacherId: number): void {
    this.timetableService.getTimeTableTeacher(teacherId)
      .subscribe(timetables => this.timetables = timetables);
  }
  public onDeleteTeacher(teacherId: number): void {
    this.teacherService.deleteTeacher(teacherId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTeacher();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

