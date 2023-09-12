import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

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
}
