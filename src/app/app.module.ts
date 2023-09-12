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
import { FormsModule } from '@angular/forms';
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
import { BusinessComponent } from './page_users/business/business.component';
import { BasicEnglishComponent } from './page_users/basic-english/basic-english.component';
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
    BusinessComponent,
    BasicEnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AddUserService, AddCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
