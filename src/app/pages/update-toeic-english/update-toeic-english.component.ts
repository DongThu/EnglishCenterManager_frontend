import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AddCourseService } from 'src/app/service/add-course.service';

@Component({
  selector: 'app-update-toeic-english',
  templateUrl: './update-toeic-english.component.html',
  styleUrls: ['./update-toeic-english.component.css']
})
export class UpdateToeicEnglishComponent implements OnInit {

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
    this.router.navigate(['/toeic-english-ad']);
  }
}
