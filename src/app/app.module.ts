import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentFormComponent } from './comment/comment-form/comment-form.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { TeacherManagerComponent } from './pages/teacher-manager/teacher-manager.component';
import { CourseComponent } from './pages/course/course.component';
import { DocumentComponent } from './pages/document/document.component';
import { LoginComponent } from './pages/login/login.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { StudyRegisterComponent } from './pages/study-register/study-register.component';
import { TuitionComponent } from './pages/tuition/tuition.component';
import { SpendingComponent } from './pages/spending/spending.component';
import { HomeUserComponent } from './page_users/home-user/home-user.component';
import { AboutUserComponent } from './page_users/about-user/about-user.component';
import { CourseUserComponent } from './page_users/course-user/course-user.component';
import { RegisterCourseComponent } from './page_users/register-course/register-course.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseService } from './service/add-course.service';
import { UpdateCourseComponent } from './pages/update-course/update-course.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './pages/update-teacher/update-teacher.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ContactComponent } from './page_users/contact/contact.component';
import { RegisterComponent } from './page_users/register/register.component';
import { LoginUserComponent } from './page_users/login-user/login-user.component';
import { YoungEnglishComponent } from './page_users/young-english/young-english.component';
import { IeltsComponent } from './page_users/ielts/ielts.component';
import { ToiecComponent } from './page_users/toiec/toiec.component';
import { BasicEnglishComponent } from './page_users/basic-english/basic-english.component';
import { BasicScheduleComponent } from './page_users/basic-schedule/basic-schedule.component';
import { ToiecScheduleComponent } from './page_users/toiec-schedule/toiec-schedule.component';
import { IeltsScheduleComponent } from './page_users/ielts-schedule/ielts-schedule.component';
import { YoungScheduleComponent } from './page_users/young-schedule/young-schedule.component';
import { ChildScheduleComponent } from './page_users/child-schedule/child-schedule.component';
import { YoungEnglishAdComponent } from './pages/young-english-ad/young-english-ad.component';
import { IeltsEnglishAdComponent } from './pages/ielts-english-ad/ielts-english-ad.component';
import { ToeicEnglishAdComponent } from './pages/toeic-english-ad/toeic-english-ad.component';
import { BasicEnglishAdComponent } from './pages/basic-english-ad/basic-english-ad.component';
import { ChildEnglishAdListComponent } from './pages/child-english-ad-list/child-english-ad-list.component';
import { YoungEnglishAdListComponent } from './pages/young-english-ad-list/young-english-ad-list.component';
import { IeltsEnglishAdListComponent } from './pages/ielts-english-ad-list/ielts-english-ad-list.component';
import { ToeicEnglishAdListComponent } from './pages/toeic-english-ad-list/toeic-english-ad-list.component';
import { BasicEnglishAdListComponent } from './pages/basic-english-ad-list/basic-english-ad-list.component';
import { RegisterCourseService } from './service/register-course.service';
import { TeacherScheduleComponent } from './pages/teacher-schedule/teacher-schedule.component';
import { AddTeacherScheduleComponent } from './pages/add-teacher-schedule/add-teacher-schedule.component';
import { UpdateTeacherScheduleComponent } from './pages/update-teacher-schedule/update-teacher-schedule.component';
import { AddTimetableComponent } from './pages/add-timetable/add-timetable.component';
import { TimetableService } from './service/timetable.service';
import { AddDocumentComponent } from './pages/add-document/add-document.component';
import { NavbarUserComponent } from './layouts/navbar-user/navbar-user.component';
import { AddYoungEnglishComponent } from './pages/add-young-english/add-young-english.component';
import { AddToiecComponent } from './pages/add-toiec/add-toiec.component';
import { AddIeltsComponent } from './pages/add-ielts/add-ielts.component';
import { AddBasicEnglishComponent } from './pages/add-basic-english/add-basic-english.component';
import { TimeTableTeacherComponent } from './pages/time-table-teacher/time-table-teacher.component';
import { UserCourseManagerComponent } from './page_users/user-course-manager/user-course-manager.component';
import { DocumentUserComponent } from './page_users/document-user/document-user.component';
import { QuizAppComponent } from './page_users/quiz-app/quiz-app.component';
import { QuizAppResultComponent } from './page_users/quiz-app-result/quiz-app-result.component';
import { ExamCourseComponent } from './pages/exam-course/exam-course.component';
import { ExamUsersComponent } from './page_users/exam-users/exam-users.component';
import { ExamTestComponent } from './page_users/exam-test/exam-test.component';
import { QuizAppResultTestComponent } from './page_users/quiz-app-result-test/quiz-app-result-test.component';
import { ExamStudentResultComponent } from './page_users/exam-student-result/exam-student-result.component';
import { ResultStudyComponent } from './pages/result-study/result-study.component';
import { ExamTopicComponent } from './pages/exam-topic/exam-topic.component';
import { ManagerQuizComponent } from './pages/manager-quiz/manager-quiz.component';
import { AddManagerQuizComponent } from './pages/add-manager-quiz/add-manager-quiz.component';
import { AddExamTopicComponent } from './pages/add-exam-topic/add-exam-topic.component';
import { AddExamCourseComponent } from './pages/add-exam-course/add-exam-course.component';
import { ListTimetableSalaryComponent } from './pages/list-timetable-salary/list-timetable-salary.component';
import { TimetableSalaryComponent } from './pages/timetable-salary/timetable-salary.component';
import { ReportComponent } from './pages/report/report.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UpdateTimetableComponent } from './pages/update-timetable/update-timetable.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CommentFormComponent,
    CommentListComponent,
    TeacherManagerComponent,
    CourseComponent,
    DocumentComponent,
    LoginComponent,
    DepositComponent,
    StudyRegisterComponent,
    TuitionComponent,
    SpendingComponent,
    HomeUserComponent,
    AboutUserComponent,
    CourseUserComponent,
    RegisterCourseComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    ScheduleComponent,
    ContactComponent,
    RegisterComponent,
    LoginUserComponent,
    YoungEnglishComponent,
    IeltsComponent,
    ToiecComponent,
    BasicEnglishComponent,
    BasicScheduleComponent,
    ToiecScheduleComponent,
    IeltsScheduleComponent,
    YoungScheduleComponent,
    ChildScheduleComponent,
    YoungEnglishAdComponent,
    IeltsEnglishAdComponent,
    ToeicEnglishAdComponent,
    BasicEnglishAdComponent,
    ChildEnglishAdListComponent,
    YoungEnglishAdListComponent,
    IeltsEnglishAdListComponent,
    ToeicEnglishAdListComponent,
    BasicEnglishAdListComponent,
    TeacherScheduleComponent,
    AddTeacherScheduleComponent,
    UpdateTeacherScheduleComponent,
    AddTimetableComponent,
    AddDocumentComponent,
    NavbarUserComponent,
    AddYoungEnglishComponent,
    AddToiecComponent,
    AddIeltsComponent,
    AddBasicEnglishComponent,
    TimeTableTeacherComponent,
    UserCourseManagerComponent,
    DocumentUserComponent,
    QuizAppComponent,
    QuizAppResultComponent,
    ExamCourseComponent,
    ExamUsersComponent,
    ExamTestComponent,
    QuizAppResultTestComponent,
    ExamStudentResultComponent,
    ResultStudyComponent,
    ExamTopicComponent,
    ManagerQuizComponent,
    AddManagerQuizComponent,
    AddExamTopicComponent,
    AddExamCourseComponent,
    ListTimetableSalaryComponent,
    TimetableSalaryComponent,
    ReportComponent,
    UpdateUserComponent,
    UpdateTimetableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AddCourseService, RegisterCourseService, TimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
