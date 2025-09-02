import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  imports: [FormsModule , BrowserModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  otp: string = '';
  showOtpField: boolean = false;

  constructor(private authService: AuthService) {}

  // Handle initial login
  onLogin() {
    const payload = { email: this.email, password: this.password };

    this.authService.login(payload).subscribe(
      (response) => {
        alert(response.message); 
        this.showOtpField = true; 
      },
      (error) => {
        console.error(error);
        alert(error.error.message);
      }
    );
  }

  // Verify OTP
  onVerifyOtp() {
    const payload = { email: this.email, otp: this.otp };

    this.authService.verifyLogin(payload).subscribe(
      (response) => {
        alert(response.message); // Success Message
        localStorage.setItem('token', response.token.access_token); // Save JWT Token
      },
      (error) => {
        console.error(error);
        alert(error.error.message);
      }
    );
  }

}
