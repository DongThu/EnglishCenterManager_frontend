import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Exam, ExamInput, examStudent, examStudentResult } from '../model/exam';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamCourseService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}


  public getExam(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.apiServerUrl}/exam/all`);
  }

  public addExam(exam: ExamInput): Observable<Object> {
    return this.http.post<ExamInput>(`${this.apiServerUrl}/exam`, exam);
  }

  public addExamStudent(exam: examStudent): Observable<Object> {
    return this.http.post<examStudent>(`${this.apiServerUrl}/examStudent`, exam);
  }

  // public searchByCourseId(id: number) {
  //   return this.http.get(`${this.apiServerUrl}/exam/courseId/${id}`).pipe(
  //     map((response: any) => {
  //       return Number(response); // Chuyển đổi kết quả trả về thành kiểu number
  //     })
  //   );
  // }

  // public searchByCourseId(id: number): Observable<Exam>{
  //   return this.http.get<Exam>(`${this.apiServerUrl}/exam/courseId/${id}`);
  // }

  public searchByCourseId(id: number): Observable<Exam[]>{
    return this.http.get<Exam[]>(`${this.apiServerUrl}/exam/courseId/${id}`);
  }

  public getExamStudentById(id: number): Observable<examStudentResult[]>{
    return this.http.get<examStudentResult[]>(`${this.apiServerUrl}/examStudent/user/${id}`);
  }

  public deleteExam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/exam/${id}`);
  }

}
