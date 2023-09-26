import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher, TeacherSchedule, TeacherScheduleList } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  // quản lý thông tin giảng viên
  public getTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiServerUrl}/teacher/all`);
  }

  public addTeacher(teacher: Teacher): Observable<Object> {
    return this.http.post<Teacher>(`${this.apiServerUrl}/teacher/add`, teacher);
  }

  public getTeacherById(id: number): Observable<Teacher>{
    return this.http.get<Teacher>(`${this.apiServerUrl}/teacher/${id}`);
  }

  public updateTeacher(id: number, teacher: Teacher): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/teacher/update/${id}`, teacher);
  }

  public deleteTeacher(teacherId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teacher/delete/${teacherId}`);
  }

  // Quản lý kế hoạch giảng dạy
  public addTeacherSchedule(id: number, teacherSchedule: TeacherSchedule): Observable<Object> {
    return this.http.post<TeacherSchedule>(`${this.apiServerUrl}/teacher-schedule/${id}`, teacherSchedule);
  }

  public getTeacherList(): Observable<TeacherScheduleList[]> {
    return this.http.get<TeacherScheduleList[]>(`${this.apiServerUrl}/teacher-schedule/all`);
  }

  public getTeacherScheduleById(id: number): Observable<TeacherSchedule>{
    return this.http.get<TeacherSchedule>(`${this.apiServerUrl}/teacher-schedule/${id}`);
  }

  public updateTeacherSchedule(id: number, teacherSchedule: TeacherSchedule): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/teacher-schedule/update/${id}`, teacherSchedule);
  }

  public deleteTeacherSchedule(teacherId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/teacher-schedule/delete/${teacherId}`);
  }
}
