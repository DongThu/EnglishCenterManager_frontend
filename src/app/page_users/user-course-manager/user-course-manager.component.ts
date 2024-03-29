import { Component } from '@angular/core';
import { ChildSchedule } from 'src/app/model/course';
import { Auth, Register, RegisterCourse } from 'src/app/model/register-course';
import { TimeTable } from 'src/app/model/timetable';
import { LoginUserService } from 'src/app/service/login-user.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';
import { TimetableService } from 'src/app/service/timetable.service';
import { VnpayService } from 'src/app/service/vnpay.service';

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
    private timeTableService: TimetableService,
    private vnpayService: VnpayService
    ) { }

  ngOnInit() {
    const username = this.auth.getUsername();
    console.log(username);
    // tìm kiếm id user bằng email
    this.userService.getUserByEmail(username)
      .subscribe((response: any) => {
        if (response) {
          this.userId = response;
          console.log(this.userId);

      // tìm kiếm thông tin đăng ký khóa học của user bằng id user
          this.userService.getRegisterUserChild(this.userId).subscribe(
            ((reponse: any) => {
              if(reponse){
                this.user = reponse;
                console.log(this.user);
                // nếu khóa học của user tồn tại thì tiếp tục lấy id khóa học của user đó đã đăng ký
                if (this.user && this.user.length > 0) {
                  const courseId = this.user[0].course.course_id;
                  console.log(courseId);
                  // console.log("có");

                  // từ id khóa học lấy id thông tin thời khóa biểu và hiển thị cho người dùng
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

  payment(price: number, id: number) {

    this.vnpayService.getPayment(price, id).subscribe({
      next: (response: string) => {
        window.location.href = response;
      },
      error: (error) => {
        // Swal.fire('Có lỗi!', error.error.message, 'error');
        console.log(error);
      },
    });
  }


}
