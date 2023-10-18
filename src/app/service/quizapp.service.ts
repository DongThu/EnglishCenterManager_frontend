import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuizApp, QuizResponse } from '../model/quizapp';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizappService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getQuiz(): Observable<QuizApp[]> {
    return this.http.get<QuizApp[]>(`${this.apiServerUrl}/quiz/get/1`);
  }

  public submitQuiz(response: QuizResponse): Observable<Object> {
    return this.http.post<QuizResponse>(`${this.apiServerUrl}/quiz/get/1`, response);
  }
}
