import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { RegisterCourse } from 'src/app/model/register-course';
import { RegisterCourseService } from 'src/app/service/register-course.service';
import {AddCourseService} from '../../service/add-course.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css','../home-user/home-user.component.css']
})
export class RegisterCourseComponent {
  register!: RegisterCourse;
  public courses!: Course[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AddCourseService: AddCourseService,
    private registerCourseService: RegisterCourseService){
      this.register = new RegisterCourse();
    }

    ngOnInit(){
      this.getCourse();
    }

    public getCourse(): void {
      this.AddCourseService.getCourse().subscribe(
        (response: Course[]) => {
          this.courses = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  saveCourse(){
    this.registerCourseService.addCourse(this.register).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/home-user']);
  }

  onSubmit(){
    console.log(this.register);
    this.saveCourse();
  }


}

