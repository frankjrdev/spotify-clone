import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }

    return this.httpClient.post(`${this.URL}/auth/login`, body)
      .pipe(
        tap((responseOK: any) => {
          const { tokenSession, data } = responseOK;
          // this.coockie.set('token', tokenSession, 4, '/');
          // this.router.navigate(['/', 'tracks']);
        })
      )

  }
}
