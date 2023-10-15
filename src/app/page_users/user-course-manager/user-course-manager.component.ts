import { Component } from '@angular/core';
import { ChildSchedule } from 'src/app/model/course';
import { Auth, Register, RegisterCourse } from 'src/app/model/register-course';
import { TimeTable } from 'src/app/model/timetable';
import { LoginUserService } from 'src/app/service/login-user.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-user-course-manager',
  templateUrl: './user-course-manager.component.html',
  styleUrls: ['./user-course-manager.component.css']
})
export class UserCourseManagerComponent {
  user!: ChildSchedule[];
  users!: Auth;
  userId!: number;
  timetables!: TimeTable;
  constructor(private userService: RegisterCourseService,
    private auth: LoginUserService,
    private timeTableService: TimetableService
    ) { }

  ngOnInit() {
    const username = this.auth.getUsername();
    console.log(username);

    this.userService.getUserByEmail(username)
      .subscribe((response: any) => {
        if (response) {
          this.userId = response;
          console.log(this.userId);

          this.userService.getRegisterUserChild(this.userId).subscribe(
            ((reponse: any) => {
              if(reponse){
                this.user = reponse;
                console.log(this.user);

                if (this.user && this.user.length > 0) {
                  const courseId = this.user[0].course.course_id;
                  console.log(courseId);
                  // console.log("có");

                  this.timeTableService.findByCourseId(courseId).subscribe((timetableId: number) => {
                    console.log(timetableId);
                    // In ra giá trị number
                    this.getTimeTableById(timetableId)

                  });

                }
                else {
                  console.log("this.user is not defined or empty");
                }
              }
              else {
                console.log("Không tìm thấy lớp học!")
              }
            })
          )

        } else {
          console.log("Không tìm thấy người dùng");
        }
      });






  }


  getTimeTableById(id: number): void {
    this.timeTableService.getTimeTableId(id)
      .subscribe(response => {
        this.timetables = response;
      });
  }


}
