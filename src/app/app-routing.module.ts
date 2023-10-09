import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {TeacherManagerComponent} from './pages/teacher-manager/teacher-manager.component';
import {CourseComponent} from './pages/course/course.component';
import {DocumentComponent} from './pages/document/document.component';
import {LoginComponent} from './pages/login/login.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { StudyRegisterComponent } from './pages/study-register/study-register.component';
import {TuitionComponent} from './pages/tuition/tuition.component';
import { SpendingComponent } from './pages/spending/spending.component';
import {HomeUserComponent} from './page_users/home-user/home-user.component';
import { AboutUserComponent } from './page_users/about-user/about-user.component';
import { CourseUserComponent } from './page_users/course-user/course-user.component';
import { RegisterCourseComponent } from './page_users/register-course/register-course.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { UpdateCourseComponent } from './pages/update-course/update-course.component';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './pages/update-teacher/update-teacher.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ContactComponent } from './page_users/contact/contact.component';
import { LoginUserComponent } from './page_users/login-user/login-user.component';
import { RegisterComponent } from './page_users/register/register.component';
import { YoungEnglishComponent } from './page_users/young-english/young-english.component';
import { ToiecComponent } from './page_users/toiec/toiec.component';
import { BasicEnglishComponent } from './page_users/basic-english/basic-english.component';
import { IeltsComponent } from './page_users/ielts/ielts.component';
import { BasicScheduleComponent } from './page_users/basic-schedule/basic-schedule.component';
import { YoungScheduleComponent } from './page_users/young-schedule/young-schedule.component';
import { IeltsScheduleComponent } from './page_users/ielts-schedule/ielts-schedule.component';
import { ToiecScheduleComponent } from './page_users/toiec-schedule/toiec-schedule.component';
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
import { TeacherScheduleComponent } from './pages/teacher-schedule/teacher-schedule.component';
import { AddTeacherScheduleComponent } from './pages/add-teacher-schedule/add-teacher-schedule.component';
import { UpdateTeacherScheduleComponent } from './pages/update-teacher-schedule/update-teacher-schedule.component';
import { AddTimetableComponent } from './pages/add-timetable/add-timetable.component';
import { AddDocumentComponent } from './pages/add-document/add-document.component';
import { AddYoungEnglishComponent } from './pages/add-young-english/add-young-english.component';
import { AddToiecComponent } from './pages/add-toiec/add-toiec.component';
import { AddIeltsComponent } from './pages/add-ielts/add-ielts.component';
import { AddBasicEnglishComponent } from './pages/add-basic-english/add-basic-english.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'teacher-manager',component:TeacherManagerComponent},
  {path: 'course', component:CourseComponent},
  {path: 'document',component:DocumentComponent},
  {path: 'login', component:LoginComponent},
  {path: 'deposit', component:DepositComponent},
  {path: 'study-register', component:StudyRegisterComponent},
  {path: 'tuition', component:TuitionComponent},
  {path: 'spending', component:SpendingComponent},
  {path: 'home-user', component:HomeUserComponent},
  {path: 'about', component:AboutUserComponent},
  {path: 'child-english', component: CourseUserComponent},
  {path: 'register-course/:id', component: RegisterCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'update-course/:id', component: UpdateCourseComponent},
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: 'update-teacher/:id', component: UpdateTeacherComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login-user', component: LoginUserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'young-english', component: YoungEnglishComponent},
  {path: 'toiec', component: ToiecComponent},
  {path: 'basic-english', component: BasicEnglishComponent},
  {path: 'ielts', component: IeltsComponent},
  {path: 'child-schedule', component: ChildScheduleComponent},
  {path: 'young-schedule', component: YoungScheduleComponent},
  {path: 'ielts-schedule', component: IeltsScheduleComponent},
  {path: 'toiec-schedule', component: ToiecScheduleComponent},
  {path: 'basic-schedule', component: BasicScheduleComponent},
  {path: 'young-english-ad', component: YoungEnglishAdComponent},
  {path: 'ielts-english-ad', component: IeltsEnglishAdComponent},
  {path: 'toeic-english-ad', component: ToeicEnglishAdComponent},
  {path: 'basic-english-ad', component: BasicEnglishAdComponent},
  {path: 'child-english-ad-list', component: ChildEnglishAdListComponent},
  {path: 'young-english-ad-list', component: YoungEnglishAdListComponent},
  {path: 'ielts-english-ad-list', component: IeltsEnglishAdListComponent},
  {path: 'toeic-english-ad-list', component: ToeicEnglishAdListComponent},
  {path: 'basic-english-ad-list', component: BasicEnglishAdListComponent},
  {path: 'teacher-schedule', component: TeacherScheduleComponent},
  {path: 'add-teacher-schedule/:id', component: AddTeacherScheduleComponent},
  {path: 'update-teacher-schedule/:id', component: UpdateTeacherScheduleComponent},
  {path: 'add-timetable', component: AddTimetableComponent},
  {path: 'add-document', component: AddDocumentComponent},
  {path: 'add-young-english', component: AddYoungEnglishComponent},
  {path: 'add-toiec', component: AddToiecComponent},
  {path: 'add-ielts', component: AddIeltsComponent},
  {path: 'add-basic-english', component: AddBasicEnglishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
