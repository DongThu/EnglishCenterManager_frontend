import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register, RegisterCourse } from 'src/app/model/register-course';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  teacher: Register = new Register();
  constructor(private teacherService: RegisterCourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getUserById(this.id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.teacherService.updateUser(this.id, this.teacher).subscribe( data =>{
      this.goToCourseList();
    }
    , error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/']);
  }
}
