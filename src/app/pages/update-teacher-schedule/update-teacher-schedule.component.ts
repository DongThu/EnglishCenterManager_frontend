import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherSchedule } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-update-teacher-schedule',
  templateUrl: './update-teacher-schedule.component.html',
  styleUrls: ['./update-teacher-schedule.component.css']
})
export class UpdateTeacherScheduleComponent implements OnInit {

  id!: number;
  teacherSchedule: TeacherSchedule = new TeacherSchedule();
  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherScheduleById(this.id).subscribe(data => {
      this.teacherSchedule = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.teacherService.updateTeacherSchedule(this.id, this.teacherSchedule).subscribe( data =>{
      this.goToCourseList();
    }
    , error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/teacher-schedule']);
  }
}
