import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeTable } from 'src/app/model/timetable';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-list-timetable-salary',
  templateUrl: './list-timetable-salary.component.html',
  styleUrls: ['./list-timetable-salary.component.css']
})
export class ListTimetableSalaryComponent implements OnInit{
  public timetable!: TimeTable[];

  constructor(
    private timetableService: TimetableService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getTimeTable();
  }

  public getTimeTable(): void {
    this.timetableService.getTimeTable().subscribe(
      (response: TimeTable[]) => {
        this.timetable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  findTeacherSchedule(timetableId: number): void {
    this.router.navigate(['/timetable-salary', timetableId]);
  }
  // updateTeacher(id: number){
  //   this.router.navigate(['update-teacher', id]);
  // }
  // public onDeleteTimetable(timetableId: number): void {
  //   this.timetableService.deleteTimeTable(timetableId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getTimeTable();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
