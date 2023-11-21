import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-add-toiec',
  templateUrl: './add-toiec.component.html',
  styleUrls: ['./add-toiec.component.css']
})
export class AddToiecComponent {
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
    this.router.navigate(['/young-english-ad']);
  }

  onSubmit(){
    console.log(this.courses);
    this.saveCourse();
  }
}

