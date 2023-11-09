import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getRevenue(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/register-course/total-revenue`);
  }

  public getSalary(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/timetable/total-salary`);
  }

  public getProfit(): Observable<number>{
    return this.http.get<number>(`${this.apiServerUrl}/financial/total-profit`);
  }
}
