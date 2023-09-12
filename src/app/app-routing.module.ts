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
import { BusinessComponent } from './page_users/business/business.component';
import { BasicEnglishComponent } from './page_users/basic-english/basic-english.component';
import { IeltsComponent } from './page_users/ielts/ielts.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'teacher-manager',component:TeacherManagerComponent},
  {path:'course', component:CourseComponent},
  {path:'document',component:DocumentComponent},
  {path:'login', component:LoginComponent},
  {path:'deposit', component:DepositComponent},
  {path:'study-register', component:StudyRegisterComponent},
  {path:'tuition', component:TuitionComponent},
  {path:'spending', component:SpendingComponent},
  {path:'home-user', component:HomeUserComponent},
  {path:'about', component:AboutUserComponent},
  {path:'child-english', component: CourseUserComponent},
  {path:'register-course', component: RegisterCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'update-course/:id', component: UpdateCourseComponent},
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: 'update-teacher/:id', component: UpdateTeacherComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login-user', component: LoginUserComponent},
  {path:  'register', component: RegisterComponent},
  {path: 'young-english', component: YoungEnglishComponent},
  {path: 'toiec', component: ToiecComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'basic-english', component: BasicEnglishComponent},
  {path: 'ielts', component: IeltsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
