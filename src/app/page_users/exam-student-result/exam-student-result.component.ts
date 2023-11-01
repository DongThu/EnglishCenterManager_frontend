import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildSchedule } from 'src/app/model/course';
import { examStudentResult } from 'src/app/model/exam';
import { Auth } from 'src/app/model/register-course';
import { ExamCourseService } from 'src/app/service/exam-course.service';
import { LoginUserService } from 'src/app/service/login-user.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-exam-student-result',
  templateUrl: './exam-student-result.component.html',
  styleUrls: ['./exam-student-result.component.css']
})
export class ExamStudentResultComponent {
  user!: ChildSchedule[];
  users!: Auth;
  userId!: number;
  public examStudent!: examStudentResult[];
  // quiz!: QuizApp[];
  // timetables!: TimeTable;
  constructor(private userService: RegisterCourseService,
    private auth: LoginUserService,
    private examCourseService: ExamCourseService,
    // private quizAppService: QuizappService,
    private router: Router,
    // private examIdService: ExamIdService
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

      // tìm kiếm thông tin kết quả học tập của user bằng id user
      this.getExamStudentById(this.userId);


        } else {
          console.log("Không tìm thấy người dùng");
        }
      });




  }


  getExamStudentById(userId: number) {
    this.examCourseService.getExamStudentById(userId)
      .subscribe((examStudent: examStudentResult[]) => {
        this.examStudent = examStudent;
      });
  }

}
