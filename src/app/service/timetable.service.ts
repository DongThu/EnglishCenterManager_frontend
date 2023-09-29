import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeTable, TimeTableInput } from '../model/timetable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

    public getTimeTable(): Observable<TimeTable[]> {
      return this.http.get<TimeTable[]>(`${this.apiServerUrl}/timetable/all`);
    }

    public addTimeTable(timetable: TimeTableInput): Observable<Object> {
      return this.http.post<TimeTableInput>(`${this.apiServerUrl}/timetable`, timetable);
    }

    public getTimeTableId(id: number): Observable<TimeTable>{
      return this.http.get<TimeTable>(`${this.apiServerUrl}/timetable/${id}`);
    }

    // public updateTimeTable(id: number, teacher: TimeTable): Observable<Object>{
    //   return this.http.put(`${this.apiServerUrl}/teacher/update/${id}`, teacher);
    // }

    public deleteTimeTable(timetableId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/timetable/delete/${timetableId}`);
    }

  }

