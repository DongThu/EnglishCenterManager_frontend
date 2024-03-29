import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { English, ManagerDocument } from '../model/document';


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


  public getDocumentById(id: number): Observable<ManagerDocument> {
    return this.http.get<ManagerDocument>(`${this.apiServerUrl}/document/find/englishId/${id}`);
  }

  public getDocumentEnglishId(id: number){
    return this.http.get(`${this.apiServerUrl}/document/get/englishId/${id}`).pipe(
      map((response: any) => {
        return Number(response); // Chuyển đổi kết quả trả về thành kiểu number
      })
    );
  }

  public Download(nameDocument: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/document/${nameDocument}`,{ responseType: 'blob' });
  }

  public addDocument(document: ManagerDocument): Observable<Object> {
    return this.http.post<ManagerDocument>(`${this.apiServerUrl}/document`, document);
  }

  public uploadDocument(nameDocument: File, nameD: string/*, typeD: string*/): Observable<any> {
    const formData = new FormData();
    formData.append('nameDocument', nameDocument);
    formData.append('nameD', nameD);
    // formData.append('typeD', typeD);

    return this.http.post(`${this.apiServerUrl}/document?nameDocument`, formData, { responseType: 'text' });
  }


  public deleteDocument(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/document/delete/${Id}`);
  }

  // lấy tất cả thông tin các chương trình dạy
  public getEnglishAll(): Observable<English[]> {
    return this.http.get<English[]>(`${this.apiServerUrl}/english/all`);
  }
}
