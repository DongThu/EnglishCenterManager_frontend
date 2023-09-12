import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/model/register-course';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../home-user/home-user.component.css']
})
export class RegisterComponent {
  register!: Register;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerCourseService: RegisterCourseService){
      this.register = new Register();
    }

    ngOnInit(){
      // this.getCourse();
    }


  saveCourse(){
    this.registerCourseService.Register(this.register).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/login-user']);
  }

  onSubmit(){
    console.log(this.register);
    this.saveCourse();
  }


}

