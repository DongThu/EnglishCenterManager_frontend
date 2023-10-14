import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeTable } from 'src/app/model/timetable';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-time-table-teacher',
  templateUrl: './time-table-teacher.component.html',
  styleUrls: ['./time-table-teacher.component.css']
})
export class TimeTableTeacherComponent implements OnInit {
  timetables!: TimeTable[];
  teacherId!: number;
  teacherEmail!: string;
  constructor(
    private route: ActivatedRoute,
    private timetableService: TimetableService) { }

  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params['teacherId'];
    // this.teacherId = +this.route.snapshot.paramMap.get('teacherId');
    this.getTimetableByTeacherId(this.teacherId);
  }

  getTimetableByTeacherId(teacherId: number): void {
    this.timetableService.getTimeTableTeacher(teacherId)
      .subscribe(timetables => this.timetables = timetables);
  }

  sendEmail() {
    this.timetableService.sendTimetableEmail(this.teacherId)
      .subscribe(
        response => {
          alert('Email gửi thành công!');
          console.log('Email gửi thành công!');

        },
        error => {
          alert('Không gửi được email!');
          console.log('Lỗi khi gửi email:', error);
        }
      );
  }
}
