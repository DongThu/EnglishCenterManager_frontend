import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/service/login-user.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css','../../page_users/home-user/home-user.component.css']
})
export class NavbarUserComponent implements OnInit{

  loggedIn: boolean = false;

  allowedRoutes = ['/home-user', '/about', '/contact','/child-schedule', '/young-schedule','/ielts-schedule', '/toiec-schedule','/basic-schedule','/child-english','/young-english', '/ielts','/toiec', '/basic-english','/login-user'];


  constructor(private authService: LoginUserService, private router: Router){}

  ngOnInit(): void {
      if(!localStorage.getItem('accessToken')&& this.allowedRoutes.includes(this.router.url)) {
        this.loggedIn = false;

        // this.router.navigate(['/login-user']);
      }
      else {
        this.loggedIn = true;
        console.log(localStorage.getItem('accessToken'));
  }
}

handleLogout(){
  this.authService.logout();
  this.loggedIn = false;
  localStorage.removeItem('accessToken');
  this.router.navigate(['/login-user']);
}

}

