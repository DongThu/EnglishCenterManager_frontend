import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, RegisterCourse } from '../model/register-course';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getCourse(): Observable<RegisterCourse[]> {
    return this.http.get<RegisterCourse[]>(`${this.apiServerUrl}/register/all`);
  }

  public addCourse(register: RegisterCourse): Observable<Object> {
    return this.http.post<RegisterCourse>(`${this.apiServerUrl}/register`, register);
  }

  public Register(register: Register): Observable<Object> {
    return this.http.post<Register>(`${this.apiServerUrl}/user/register`, register);
  }
  // public getCourseById(id: number): Observable<RegisterCourse>{
  //   return this.http.get<RegisterCourse>(`${this.apiServerUrl}/course/${id}`);
  // }

  // public updateCourse(id: number, register: RegisterCourse): Observable<Object>{
  //   return this.http.put(`${this.apiServerUrl}/course/update/${id}`, register);
  // }

  public deleteRegister(registerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/register/delete/${registerId}`);
  }
}
