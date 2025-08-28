import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { ChartData, ChartType } from 'chart.js';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuActive = false;
  toggleMenu() {
    console.log('hamburger is clicked');
    this.menuActive = !this.menuActive;
  }
  title = 'job-portal-fe';
}
