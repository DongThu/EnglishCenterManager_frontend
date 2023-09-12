import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
  teacher!: Teacher;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TeacherService: TeacherService){
      this.teacher = new Teacher();
    }

  ngOnInit(){
    // this.getCourse();
  }
  saveCourse(){
    this.TeacherService.addTeacher(this.teacher).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/teacher-manager']);
  }

  onSubmit(){
    console.log(this.teacher);
    this.saveCourse();
  }


}
