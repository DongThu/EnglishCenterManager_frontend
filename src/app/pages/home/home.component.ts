import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register, RegisterCourse } from 'src/app/model/register-course';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public register!: Register[];

  constructor(
    private registerCourseService: RegisterCourseService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.getRegister();
  }

  public getRegister(): void {
    this.registerCourseService.getListRegister().subscribe(
      (response: Register[]) => {
        this.register = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRegister(registerId: number): void {
    this.registerCourseService.deleteRegister(registerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRegister();
      },
      (error: HttpErrorResponse) => {
        alert("Bạn không thể xóa người này!");
      }
    );
  }
}
