import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildSchedule, Course } from 'src/app/model/course';
import { RegisterCourse } from 'src/app/model/register-course';
import { AddCourseService } from 'src/app/service/add-course.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';


@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css','../home-user/home-user.component.css']
})
export class RegisterCourseComponent implements OnInit {

  id!: number;
  courses: Course = new Course();
  registerChild!: RegisterCourse;

  constructor(
    private AddCourseService: AddCourseService,
    private route: ActivatedRoute,
    private router: Router,
    private registerCourseChild: RegisterCourseService) {
      this.registerChild =new RegisterCourse()
    }




  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.AddCourseService.getCourseById(this.id).subscribe(data => {
      this.courses = data;
    }, error => console.log(error));
  }

  // onSubmit(){
  //   this.AddCourseService.updateCourse(this.id, this.courses).subscribe( data =>{
  //     this.goToCourseList();
  //   }
  //   , error => console.log(error));
  // }

  // goToCourseList(){
  //   this.router.navigate(['/course']);
  // }

  saveRegister(){
    this.registerCourseChild.RegisterCourse(this.id, this.registerChild).subscribe( data =>{
      console.log(data);
      alert('Đăng ký thành công!');
      this.goToCourseList();
    },
    error => {
      console.log(error);
      alert('Vui lòng nhập email đúng với email đăng ký');
    })
  }

  goToCourseList(){
    this.router.navigate(['/child-schedule']);
  }

  onSubmit(){
    console.log(this.registerChild);
    this.saveRegister();
  }


}
