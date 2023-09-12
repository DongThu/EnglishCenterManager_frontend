import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id!: number;
  courses: Course = new Course();
  constructor(private AddCourseService: AddCourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.AddCourseService.getCourseById(this.id).subscribe(data => {
      this.courses = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.AddCourseService.updateCourse(this.id, this.courses).subscribe( data =>{
      this.goToCourseList();
    }
    , error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/course']);
  }
}
