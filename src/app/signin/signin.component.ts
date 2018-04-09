import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginInProcess: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  // crea un object
  signinForm: FormGroup;
  // hide para ocultar la contraseña
  hide = true;

  constructor(private authService: AuthService) {
    this.loginInProcess = false;
   }

  ngOnInit() {
      // formgroup le pasamos un object json
      this.signinForm = new FormGroup({
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
          ]),
          password: new FormControl(null, Validators.required)
      });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.loginInProcess = true;
      const { email, password } = this.signinForm.value;
      const user = new User(email, password);
      this.authService.signin(user)
        .subscribe(
          this.authService.login,
          this.authService.handleError
        );
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Ingrese su ' :
        this.email.hasError('email') ? 'Campo incorrecto ' :
            '';
  }
}
