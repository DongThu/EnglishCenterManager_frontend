import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAdminService } from 'src/app/service/login-admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: LoginAdminService, private router: Router){}

  ngOnInit(): void {
      if(!localStorage.getItem('accessToken')){
        this.router.navigate(['/login']);
      }
      console.log(localStorage.getItem('accessToken'));
  }

  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
