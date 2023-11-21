import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCourseService } from 'src/app/service/add-course.service';
import { NgForm, FormControl } from '@angular/forms';

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
    error => {
      console.log(error);
      alert('Thêm khóa học thất bại do nhập sai định dạng, vui lòng kiểm tra lại!');
    })
  }

  goToCourseList(){
    this.router.navigate(['/course']);
  }

  onSubmit(){
    console.log(this.courses);
    this.saveCourse();
  }

  getValue(f:FormControl){
    console.log(f);
  }

}
