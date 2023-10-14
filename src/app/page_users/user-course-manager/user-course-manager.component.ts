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
    // Thay thế bằng ID người dùng sau khi đăng nhập thành công

    // const email = this.auth.getUsername();
    // console.log(email)


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

      this.getTimeTableById(4)

  }

  getTimeTableById(id: number): void {
    this.timeTableService.getTimeTableId(id)
      .subscribe(response => {
        this.timetables = response;
      });
  }


}
