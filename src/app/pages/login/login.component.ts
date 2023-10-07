import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'src/app/model/register-course';
import { LoginAdminService } from 'src/app/service/login-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../page_users/home-user/home-user.component.css']
})
export class LoginComponent {
  form: any;
  constructor(fb: FormBuilder, private auth: LoginAdminService) {
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

