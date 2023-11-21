import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';
@Component({
  selector: 'app-add-basic-english',
  templateUrl: './add-basic-english.component.html',
  styleUrls: ['./add-basic-english.component.css']
})
export class AddBasicEnglishComponent {
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
    error => {
      console.log(error);
      alert('Thêm khóa học thất bại do nhập sai định dạng, vui lòng kiểm tra lại!');
    })  }

  goToCourseList(){
    this.router.navigate(['/basic-english-ad']);
  }

  onSubmit(){
    console.log(this.courses);
    this.saveCourse();
  }
}
