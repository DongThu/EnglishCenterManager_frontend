import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildSchedule } from 'src/app/model/course';
import { Exam } from 'src/app/model/exam';
import { QuizApp } from 'src/app/model/quizapp';
import { Auth } from 'src/app/model/register-course';
import { ExamCourseService } from 'src/app/service/exam-course.service';
import { ExamIdService } from 'src/app/service/exam-id.service';
import { LoginUserService } from 'src/app/service/login-user.service';
import { QuizappService } from 'src/app/service/quizapp.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';
import { TimetableService } from 'src/app/service/timetable.service';

@Component({
  selector: 'app-exam-users',
  templateUrl: './exam-users.component.html',
  styleUrls: ['./exam-users.component.css']
})
export class ExamUsersComponent {
  user!: ChildSchedule[];
  users!: Auth;
  userId!: number;
  public exams!: Exam[];
  quiz!: QuizApp[];
  // timetables!: TimeTable;
  constructor(private userService: RegisterCourseService,
    private auth: LoginUserService,
    private examCourseService: ExamCourseService,
    private quizAppService: QuizappService,
    private router: Router,
    private examIdService: ExamIdService
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

                  this.searchByCourseId(courseId);

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


  searchByCourseId(courseId: number) {
    this.examCourseService.searchByCourseId(courseId)
      .subscribe((exams: Exam[]) => {
        this.exams = exams;
      });
  }


  // getQuizById(quizId: number) {
  //   this.quizAppService.getQuizById(quizId)
  //     .subscribe((quiz: QuizApp[]) => {
  //       this.quiz = quiz;
  //       this.navigateToQuizPage(quizId);
  //     });
  // }

  // navigateToQuizPage(quizId: number) {
  //   this.router.navigateByUrl('/quiz-app'); // Replace '/quiz/' with the path of the desired page
  // }

  findQuizById(quizId: number, examId: number): void {
    console.log(examId);
    this.examIdService.setExamId(examId);
    this.router.navigate(['/exam-test', quizId],  { queryParams: { 'examId': examId }, queryParamsHandling: 'merge' });
  }
}
