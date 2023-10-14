export class RegisterCourse{
  id!: number;
  email!: String;
}

export class Register{
  id!: number;
  name!: String ;
  address!: String ;
  birthday!: Date ;
  phone!: Number;
  username!: String;
  password!:String;
}
export class Auth {
  constructor(private username: string = '', private password: string = '') {}

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

}

export class AuthAd {
  constructor(private usernameAd: string = '', private passwordAd: string = '') {}

  getUsernameAd(): string {
    return this.usernameAd;
  }

  getPasswordAd(): string {
    return this.passwordAd;
  }
}
