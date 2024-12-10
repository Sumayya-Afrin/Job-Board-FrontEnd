import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'job/:id', component: JobDetailsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contact', component: ContactPageComponent },

];



export default routes;