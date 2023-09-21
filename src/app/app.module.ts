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
import { AddUserService } from './service/add-user.service';
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
    BasicEnglishAdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AddUserService, AddCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
