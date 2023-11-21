import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, RegisterCourse } from '../model/register-course';
import { ChildSchedule, Course  } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


// service quản lý đăng ký Tiếng Anh thiếu nhi
  public RegisterCourse(id: number, register: RegisterCourse): Observable<Object> {
    return this.http.post<RegisterCourse>(`${this.apiServerUrl}/register-course/${id}`, register);
  }



  public getRegisterListChild(): Observable<ChildSchedule[]> {
    return this.http.get<ChildSchedule[]>(`${this.apiServerUrl}/register-course/all`);
  }

  public getRegisterUserChild(id: number): Observable<ChildSchedule[]> {
    return this.http.get<ChildSchedule[]>(`${this.apiServerUrl}/register-course/user/${id}`);
  }

  getRegistrationsForCourse(courseId: number): Observable<ChildSchedule[]> {
    const url = `${this.apiServerUrl}/register-course/registrations?courseId=${courseId}`;
    return this.http.get<ChildSchedule[]>(url);
  }

  public findByclassChildId(id: number) {
    return this.http.get(`${this.apiServerUrl}/register-course/find/courseId/${id}`).pipe(
      map((response: any) => {
        return Number(response); // Chuyển đổi kết quả trả về thành kiểu number
      })
    );
  }
  public deleteRegisterListChild(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/register-course/delete/${Id}`);
  }


  // Đăng ký khóa học bên user
  public Register(register: Register): Observable<Object> {
    return this.http.post<Register>(`${this.apiServerUrl}/api/v1/user/register`, register);
  }

  public getListRegister(): Observable<Register[]> {
    return this.http.get<Register[]>(`${this.apiServerUrl}/api/v1/user/all`);
  }

  public getUserById(id: number): Observable<Register>{
    return this.http.get<Register>(`${this.apiServerUrl}/api/v1/user/${id}`);
  }

  public getUserByEmail(username: String){
    return this.http.get(`${this.apiServerUrl}/api/v1/user/find/username/${username}`);
  }

  public updateUser(id: number, teacher: Register): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/api/v1/user/update/${id}`, teacher);
  }

  searchUserByName(name: string): Observable<Register[]> {
    return this.http.get<Register[]>(`${this.apiServerUrl}/api/v1/user/search?name=${name}`);
  }

  // có thể bỏ
//Quản lý đăng ký học viên
  public deleteRegister(registerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/delete/${registerId}`);
  }

  public getCourse(): Observable<RegisterCourse[]> {
    return this.http.get<RegisterCourse[]>(`${this.apiServerUrl}/register/all`);
  }


}
