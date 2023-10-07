import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from 'src/app/service/login-user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{

  // loggedIn: boolean = false;

  constructor(private authService: LoginUserService, private router: Router){}

  ngOnInit(): void {
  //     if(!localStorage.getItem('accessToken')){
  //       this.router.navigate(['/login-user']);
  //     }
  //     else {
  //       this.loggedIn = true;
  //       console.log(localStorage.getItem('accessToken'));
  // }
}

// handleLogout(){
//   this.authService.logout();
//   this.loggedIn = false;
//   // localStorage.removeItem('accessToken');
//   this.router.navigate(['/login-user']);
// }

}
