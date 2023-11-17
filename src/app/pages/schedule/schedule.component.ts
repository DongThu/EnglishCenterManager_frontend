import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TimeTable } from 'src/app/model/timetable';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{
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

  updateTimetable(id: number){
    this.router.navigate(['update-timetable', id]);
  }
  public onDeleteTimetable(timetableId: number): void {
    this.timetableService.deleteTimeTable(timetableId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTimeTable();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

