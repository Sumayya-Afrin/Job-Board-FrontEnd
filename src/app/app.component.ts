import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, LoginComponent, RegisterComponent, JobDetailsComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-portal-fe';
}
