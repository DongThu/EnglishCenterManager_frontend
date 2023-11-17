import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Teacher } from 'src/app/model/teacher';
import { TimeTable, TimeTableInput } from 'src/app/model/timetable';
import { TeacherService } from 'src/app/service/teacher.service';
import { TimetableService } from 'src/app/service/timetable.service';
import { AddCourseService } from 'src/app/service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-timetable',
  templateUrl: './update-timetable.component.html',
  styleUrls: ['./update-timetable.component.css']
})
export class UpdateTimetableComponent implements OnInit {

  id!: number;
  timetable: TimeTableInput = new TimeTableInput();
  public courses!: Course[];
  public teachers!: Teacher[];

  constructor(private AddCourseService: AddCourseService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private timetableService: TimetableService){
    this.timetable = new TimeTableInput();
    // this.teacher = new Teacher();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.timetableService.getTimeTableInputId(this.id).subscribe(data => {
      this.timetable = data;
    }, error => console.log(error));
    this.getCourse();
    this.getTeacher();
  }

  onSubmit(){
    this.timetableService.updateTimetable(this.id, this.timetable).subscribe( data =>{
      this.goToCourseList();
    }
    , error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/schedule']);
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

}
