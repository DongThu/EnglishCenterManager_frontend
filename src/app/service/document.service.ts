import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ManagerDocument } from '../model/document';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  // quản lý thông tin tài liệu
  public getDocument(): Observable<ManagerDocument[]> {
    return this.http.get<ManagerDocument[]>(`${this.apiServerUrl}/document/all`);
  }

  public Download(nameDocument: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/document/${nameDocument}`,{ responseType: 'blob' });
  }

  public addDocument(document: ManagerDocument): Observable<Object> {
    return this.http.post<ManagerDocument>(`${this.apiServerUrl}/document`, document);
  }

  public uploadDocument(nameDocument: File, nameD: string, typeD: string): Observable<any> {
    const formData = new FormData();
    formData.append('nameDocument', nameDocument);
    formData.append('nameD', nameD);
    formData.append('typeD', typeD);

    return this.http.post(`${this.apiServerUrl}/document?nameDocument`, formData, { responseType: 'text' });
  }


  public deleteDocument(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/document/delete/${Id}`);
  }
}
