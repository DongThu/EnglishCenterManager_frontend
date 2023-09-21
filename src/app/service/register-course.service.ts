import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, RegisterCourse } from '../model/register-course';
import { ChildSchedule, Course  } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getCourse(): Observable<RegisterCourse[]> {
    return this.http.get<RegisterCourse[]>(`${this.apiServerUrl}/register/all`);
  }

  public RegisterCourse(id: number, register: ChildSchedule): Observable<Object> {
    return this.http.post<ChildSchedule>(`${this.apiServerUrl}/register-course/${id}`, register);
  }

  public Register(register: Register): Observable<Object> {
    return this.http.post<Register>(`${this.apiServerUrl}/api/v1/user/register`, register);
  }

  // public getCourseById(id: number): Observable<RegisterCourse>{
  //   return this.http.get<RegisterCourse>(`${this.apiServerUrl}/course/${id}`);
  // }

  public getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiServerUrl}/course/${id}`);
  }
  // public updateCourse(id: number, register: RegisterCourse): Observable<Object>{
  //   return this.http.put(`${this.apiServerUrl}/course/update/${id}`, register);
  // }

  public deleteRegister(registerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/register/delete/${registerId}`);
  }
}
