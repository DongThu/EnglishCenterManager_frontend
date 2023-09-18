import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'src/app/model/register-course';
import {LoginUserService} from 'src/app/service/login-user.service'
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css','../home-user/home-user.component.css']
})
export class LoginUserComponent {
  form: any;
  constructor(fb: FormBuilder, private auth: LoginUserService) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(123);
    this.auth.login(
      new Auth(this.form.value.username, this.form.value.password)
    );
  }
}
