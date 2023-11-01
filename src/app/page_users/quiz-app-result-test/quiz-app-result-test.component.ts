import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { examStudent } from 'src/app/model/exam';
import { Auth } from 'src/app/model/register-course';
import { ExamCourseService } from 'src/app/service/exam-course.service';
import { ExamIdService } from 'src/app/service/exam-id.service';
import { LoginUserService } from 'src/app/service/login-user.service';
import { RegisterCourseService } from 'src/app/service/register-course.service';

@Component({
  selector: 'app-quiz-app-result-test',
  templateUrl: './quiz-app-result-test.component.html',
  styleUrls: ['./quiz-app-result-test.component.css']
})
export class QuizAppResultTestComponent  implements OnInit{
  result: any;
  countdown!: number;
  timer: any;
  users!: Auth;
  userId!: number;
  examStudent!: examStudent;
  examId!: number;
  constructor(
    private examCourseService: ExamCourseService,
    private router: Router,
    private authService: LoginUserService,
    private userService: RegisterCourseService,
    private auth: LoginUserService,
    private route: ActivatedRoute,
    private examIdService: ExamIdService

    ){
      this.examStudent = new examStudent();
  }
  ngOnInit(

  ) {
    this.result = history.state.result;


    const username = this.auth.getUsername();
    console.log(username);
    // tìm kiếm id user bằng email
    this.userService.getUserByEmail(username)
      .subscribe((response: any) => {
        if (response) {
          this.userId = response;
          console.log(this.userId);

        } else {
          console.log("Không tìm thấy người dùng");
        }
      });

  }

  saveCourse(): void {
    this.examStudent.userId = this.userId;
    // this.examStudent.examId = 1;
    this.examStudent.examId = this.examIdService.getExamId();

    this.examStudent.score = this.result;
    this.examCourseService.addExamStudent(this.examStudent).subscribe( data =>{
      console.log(data);
      this.goToCourseList();
    },
    error => console.log(error));
  }

  goToCourseList(){
    this.router.navigate(['/exam-student-result']);
  }

  onSubmit(){
    console.log(this.examStudent);
    this.saveCourse();
  }
}
