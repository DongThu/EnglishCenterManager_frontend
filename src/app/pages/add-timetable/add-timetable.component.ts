import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Teacher } from 'src/app/model/teacher';
import { TimeTable, TimeTableInput } from 'src/app/model/timetable';
import { AddCourseService } from 'src/app/service/add-course.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css']
})
export class AddTimetableComponent implements OnInit{
  public courses!: Course[];
  public teachers!: Teacher[];
  public timetable!: TimeTableInput;
  public teacher!: Teacher;

  selectedProgram!: string;
  constructor(
    private AddCourseService: AddCourseService,
    private teacherService: TeacherService,
    private router: Router,
    private timetableService: TimetableService){
    this.timetable = new TimeTableInput();
    this.teacher = new Teacher();
  }
  ngOnInit(){
    this.getCourse();
    this.getTeacher();

  }

  public getCourse(): void {
    this.AddCourseService.getCourse().subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log(this.courses)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTeacher(): void {
    this.teacherService.getTeacher().subscribe(
      (response: Teacher[]) => {
        this.teachers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  saveTimeTable(){
    this.timetableService.addTimeTable(this.timetable).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/schedule']);
  }

  onSubmit(){
    console.log(this.timetable);
    this.saveTimeTable();
  }

  // saveCourse(){
  //   this.teacherService.addTeacher(this.teacher).subscribe( data =>{
  //     console.log(data);
  //     this.goToCourseList();
  //   },
  //   error => console.log(error));
  // }

  // goToCourseList(){
  //   this.router.navigate(['/teacher-manager']);
  // }

  // onSubmit(){
  //   console.log(this.teacher);
  //   this.saveCourse();
  // }

}
