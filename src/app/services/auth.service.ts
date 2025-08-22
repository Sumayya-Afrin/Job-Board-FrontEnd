import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth'; // Backend base URL

  constructor(private http: HttpClient) {}

  // Register a user
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // Verify OTP for registration
  verifyRegistration(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify-registration`, data);
  }

  // Login a user
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // Verify OTP for login
  verifyLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/verify-login`, data);
  }
}
