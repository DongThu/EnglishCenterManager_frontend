import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-manager',
  templateUrl: './teacher-manager.component.html',
  styleUrls: ['./teacher-manager.component.css']
})
export class TeacherManagerComponent implements OnInit{
  public teacher!: Teacher[];

  constructor(
    private teacherService: TeacherService,
    private router: Router
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

