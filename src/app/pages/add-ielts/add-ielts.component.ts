import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-add-ielts',
  templateUrl: './add-ielts.component.html',
  styleUrls: ['./add-ielts.component.css']
})
export class AddIeltsComponent {
  courses!: Course;

  constructor(
    private router: Router,
    private AddCourseService: AddCourseService){
      this.courses = new Course();
    }

  ngOnInit(){
    // this.getCourse();
  }
  saveCourse(){
    this.AddCourseService.addCourse(this.courses).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/ielts-english-ad']);
  }

  onSubmit(){
    console.log(this.courses);
    this.saveCourse();
  }
}
