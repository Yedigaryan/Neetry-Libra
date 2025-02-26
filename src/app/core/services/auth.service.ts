// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS imports
import { Observable, tap } from 'rxjs';

// Application interfaces
import { ILoginResponse } from '@core/interfaces/i-login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey: string = 'token';
  private readonly loginUrl: string = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.loginUrl, { email, password }).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
