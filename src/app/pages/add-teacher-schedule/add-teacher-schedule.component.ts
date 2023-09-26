import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher, TeacherSchedule } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-teacher-schedule',
  templateUrl: './add-teacher-schedule.component.html',
  styleUrls: ['./add-teacher-schedule.component.css']
})
export class AddTeacherScheduleComponent {
  teacherSchedule!: TeacherSchedule;
  id!: number;
  teacher: Teacher = new Teacher();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService){
      this.teacherSchedule = new TeacherSchedule();
    }

  ngOnInit():void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));
  }
  saveCourse(){
    this.teacherService.addTeacherSchedule(this.id, this.teacherSchedule).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/teacher-manager']);
  }

  onSubmit(){
    console.log(this.teacherSchedule);
    this.saveCourse();
  }


}
