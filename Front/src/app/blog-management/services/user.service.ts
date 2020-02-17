import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RequestOptions, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.userUrl + 'api/user/';

  constructor(private http: HttpClient ){ }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.url}`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.url}getOne/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}create`,user);
  }

  updateUser (user: User): Observable<User> {
    return this.http.post<User>(`${this.url}update/${user.id}`,user);
  }

  deleteUser(userId: number): Observable<Object> {
    return this.http.post<Object>(`${this.url}delete/${userId}`,null);
  }

  loginUser(userName: string, userPassword: string): Observable<User>{
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headerOptions});
    var userData = {Username: userName, Password: userPassword}
    return null;//this.http.post(`${this.url}login`, JSON.stringify(userData), requestOptions);
  }
}