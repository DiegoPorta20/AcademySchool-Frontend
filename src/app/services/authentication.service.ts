import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../interfaces/SignIn';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = 'https://localhost:44331/api/v1'
  constructor(private http: HttpClient) { }

  signIn(data: SignIn): Observable<User>{
    const url = `${this.apiUrl}/users/sign-in`;
    return this.http.post<User>(url, data);
  }
  signUp(data: any): Observable<any>{
    const url = `${this.apiUrl}/users/sign-up`;
    return this.http.post<any>(url, data);
  }
}
