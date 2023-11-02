import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateQuiz, QuizApp, QuizAppAd, QuizResponse } from '../model/quizapp';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizappService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getQuiz(): Observable<QuizApp[]> {
    return this.http.get<QuizApp[]>(`${this.apiServerUrl}/quiz/get/1`);
  }

  public getQuizById(id: number): Observable<QuizApp[]> {
    return this.http.get<QuizApp[]>(`${this.apiServerUrl}/quiz/get/${id}`);
  }

  public submitQuiz(response: QuizResponse): Observable<Object> {
    return this.http.post<QuizResponse>(`${this.apiServerUrl}/quiz/get/1`, response);
  }

  // phía ad
  public addQuestion(question: QuizAppAd): Observable<Object> {
    return this.http.post<QuizAppAd>(`${this.apiServerUrl}/quizapp`, question);
  }

  public getQuestion(): Observable<QuizAppAd[]> {
    return this.http.get<QuizAppAd[]>(`${this.apiServerUrl}/quizapp/all`);
  }

  public deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/quizapp/${id}`);
  }

  public getQuizAll(): Observable<CreateQuiz[]> {
    return this.http.get<CreateQuiz[]>(`${this.apiServerUrl}/quiz/getAll`);
  }

  public deleteQuiz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/quiz/${id}`);
  }

  // public addQuiz(quiz: CreateQuiz): Observable<Object> {
  //   return this.http.post<CreateQuiz>(`${this.apiServerUrl}/quiz/create`, quiz);
  // }

  public addQuiz(quiz: CreateQuiz): Observable<Object> {
    const params = new HttpParams()
      // .set('id', quiz.id.toString())
      .set('category', quiz.category)
      .set('numQ', quiz.numQ)
      .set('title', quiz.title);

    return this.http.post(`${this.apiServerUrl}/quiz/create`, null, { params });
  }

}


