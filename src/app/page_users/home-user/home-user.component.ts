import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/service/login-user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{

  constructor(private authService: LoginUserService, private router: Router){}

  ngOnInit(): void {
      if(!localStorage.getItem('accessToken')){
        this.router.navigate(['/login-user']);
      }
      console.log(localStorage.getItem('accessToken'));
  }

  handleLogout(){
    this.authService.logout();
    this.router.navigate(['/login-user']);
  }
}
