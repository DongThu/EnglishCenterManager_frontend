import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../app/model/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiServerUrl}/course/all`);
  }

  public addCourse(course: Course): Observable<Object> {
    return this.http.post<Course>(`${this.apiServerUrl}/course/add`, course);
  }

  public getCourseById(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiServerUrl}/course/${id}`);
  }

  public updateCourse(id: number, course: Course): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/course/update/${id}`, course);
  }

  public deleteCourse(courseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/course/delete/${courseId}`);
  }
}
