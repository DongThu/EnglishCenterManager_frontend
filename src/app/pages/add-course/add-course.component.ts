import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courses!: Course;

  constructor(
    private route: ActivatedRoute,
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
    this.router.navigate(['/course']);
  }

  onSubmit(){
    console.log(this.courses);
    this.saveCourse();
  }


}
