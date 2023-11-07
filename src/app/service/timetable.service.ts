import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeTable, TimeTableInput } from '../model/timetable';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

    public getTimeTable(): Observable<TimeTable[]> {
      return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timetable/all`);
    }
    // thời khóa biểu giảng viên
    public getTimeTableTeacher(teacherId: number): Observable<TimeTable[]> {
      return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timetable/teacher/${teacherId}`);
    }

    public addTimeTable(timetable: TimeTableInput): Observable<Object> {
      return this.http.post<TimeTableInput>(`${this.apiServerUrl}/timetable`, timetable);
    }

    public getTimeTableId(id: number): Observable<TimeTable>{
      return this.http.get<TimeTable>(`${this.apiServerUrl}/timetable/${id}`);
    }

    public findByCourseId(id: number){
      return this.http.get(`${this.apiServerUrl}/timetable/find/timetable/${id}`).pipe(
        map((response: any) => {
          return Number(response); // Chuyển đổi kết quả trả về thành kiểu number
        })
      );
    }
    // public updateTimeTable(id: number, teacher: TimeTable): Observable<Object>{
    //   return this.http.put(`${this.apiServerUrl}/teacher/update/${id}`, teacher);
    // }

    public deleteTimeTable(timetableId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/timetable/delete/${timetableId}`);
    }

    // gửi email thời khóa biểu
    // sendTimetableEmail(teacherEmail: string, timetables: TimeTable[]) {
    //   const emailData = {
    //     teacherEmail: teacherEmail,
    //     timetables: timetables
    //   };

    //   return this.http.post(this.apiServerUrl + '/send-email', emailData);
    // }

    public sendTimetableEmail(teacherId: number): Observable<TimeTable[]> {
      return this.http.post<TimeTable[]>(`${this.apiServerUrl}/timetable/sendEmail/${teacherId}`, teacherId);
    }

    calculateSalary(timetableId: number) {
     return this.http.get<number>(`${this.apiServerUrl}/timetable/salary/${timetableId}`);
    }

  }


