import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth} from '../model/register-course';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private http: HttpClient, private router: Router) {}

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    return `${environment.apiBaseUrl}/${endpoint}`;
  }

  //Lấy role
  getRoles(username: string): Observable<string[]> {
    return this.http.get<string[]>(
      this.getFullUrl(`api/v1/user/role/${username}`)
    );
  }

  //set user
  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  getUser(): any {
    const userString = localStorage.getItem('user');
    return userString != null ? JSON.parse(userString) : null;
  }

  //đăng xuất
  logout(): any {
    if (this.getUser() != null) {
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    }
  }

  //đăng nhập
  login(auth: Auth): void {
    this.http
      .post(this.getFullUrl('api/v1/user/login'), auth)
      .pipe(
        tap((response: any) => {
          console.log(response);
          if (response.accessToken) {
            // lưu trữ token
            localStorage.setItem('accessToken', response.accessToken);

            //Kiểm duyệt vai trò
            this.getRoles(auth.getUsername()).subscribe((roles) => {
              if (roles.includes('ADMIN')) {
                this.router.navigate(['/home']);
              } else {
                this.router.navigate(['/']);
              }
            });
          }
        }),
        catchError((error) => {
          if (error.status === 401) {
            console.log('Thất bại');
          }
          throw error;
        })
      )
      .subscribe();
  }
}
