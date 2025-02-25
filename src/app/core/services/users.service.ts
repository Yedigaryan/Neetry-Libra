import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsersResponse } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = 'https://reqres.in/api/users?page=1';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUsersResponse> {
    return this.http.get<IUsersResponse>(this.usersUrl);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`https://reqres.in/api/users/${userId}`, userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`https://reqres.in/api/users/${userId}`);
  }
}
