import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  public errorSession: boolean = false

  formLogin: FormGroup = new FormGroup({})

  constructor(private authServices: AuthService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
      }
    )
  }


  sendLogin() {
    const { email, password } = this.formLogin.value;
    this.authServices.sendCredentials(email, password)
      .subscribe(
        {
          next: response => {
            console.log('credenciales correctas');
            const { tokenSession, data } = response
            this.cookie.set('token', tokenSession, 4, '/')
            this.router.navigate(['/', 'tracks'])

          },
          error: err => {
            this.errorSession = true;
            console.log(`Error de credenciales ${err}`);
          }
        }
      )
  }
}
