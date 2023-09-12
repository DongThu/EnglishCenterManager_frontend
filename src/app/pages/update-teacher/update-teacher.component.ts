import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  id!: number;
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe( data =>{
      this.goToCourseList();
    }
    , error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/teacher-manager']);
  }
}
